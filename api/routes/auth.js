import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the auth route endpoint.");
});

router.get("/register", (req, res) => {
    res.send("Hello, Register endpoint.");
});

export default router;