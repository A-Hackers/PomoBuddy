import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';
import validator from 'validator';

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// signup
UserSchema.statics.signup = async function(email, password) {
    if (!email || !password) throw Error('All fields required');
    if (!validator.isEmail(email)) throw Error('Invalid Email');
    if (!validator.isStrongPassword(password)) throw Error('Password is not strong');

    const exists = await this.findOne({ email });
    if (exists) throw Error('Email already registered');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user;
}

// login
UserSchema.statics.login = async function(email, password) {
    if (!email || !password) throw Error('All fields required');

    const user = await this.findOne({ email });
    if (!user) throw Error('Email not registered');
    
    console.log('User found:', user);

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        console.log('Password does not match');
        throw Error('Incorrect password');
    }

    console.log('Password matches');
    return user;
}

export default model('User', UserSchema);
