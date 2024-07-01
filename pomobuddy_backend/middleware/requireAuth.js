import jwt from "jsonwebtoken";
import User from "../models/User.js";

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];
  console.log("Received token:", token);
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded user ID:", _id);
    req.user = await User.findById(_id).select("_id");
    console.log("Authenticated user:", req.user);
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export default requireAuth;
