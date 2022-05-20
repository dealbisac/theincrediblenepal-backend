import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

//REGISTER USER
router.post("/register", registerUser);

//LOGIN
router.post("/login", loginUser);

export default router;