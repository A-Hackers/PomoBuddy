import express from "express";
import {
  signupUser,
  loginUser,
  getCurrentUser,
} from "../controllers/userControllers.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// Public routes
router.post("/signup", signupUser);
router.post("/login", loginUser);

// Protected routes
router.use(requireAuth);
router.get("/me", getCurrentUser);

export default router;
