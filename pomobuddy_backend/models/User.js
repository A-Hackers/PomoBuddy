import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import mongoose from "mongoose";
import TimeMode from "./TimeMode.js";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  modeList: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TimeMode", default: [] },
  ],
});

// signup
UserSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw Error("All fields required");
  if (!validator.isEmail(email)) throw Error("Invalid Email");
  if (!validator.isStrongPassword(password))
    throw Error("Password is not strong");

  const exists = await this.findOne({ email });
  if (exists) throw Error("Email already registered");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  const defaultTimeList = [
    {
      modeName: "Pomodoro",
      workMinutes: 25,
      workSeconds: 0,
      breakMinutes: 5,
      breakSeconds: 0,
      displayMessage: "Pomodoro",
    },
    {
      modeName: "Apple Juice",
      workMinutes: 10,
      workSeconds: 0,
      breakMinutes: 3,
      breakSeconds: 0,
      displayMessage: "Apple Juice",
    },
    {
      modeName: "Bananasadasdasdasdasdasdasdasd",
      workMinutes: 0,
      workSeconds: 5,
      breakMinutes: 0,
      breakSeconds: 5,
      displayMessage: "Banana",
    },
  ];

  const createdTimeModes = await TimeMode.insertMany(defaultTimeList);
  user.modeList.push(...createdTimeModes);
  await user.save();
  return user;
};

// login
UserSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields required");

  const user = await this.findOne({ email });
  if (!user) throw Error("Email not registered");

  console.log("User found:", user);

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    console.log("Password does not match");
    throw Error("Incorrect password");
  }

  console.log("Password matches");
  return user;
};

export default model("User", UserSchema);
