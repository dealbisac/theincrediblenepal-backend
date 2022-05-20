import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the rooms endpoint");
});

export default router;