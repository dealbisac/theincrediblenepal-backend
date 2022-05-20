import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// JWT token verification practice
// router.get("/checkauthetication", verifyToken, (req, res, next) => {
//     res.send("Hello user, You are authenticated");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, You are Logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, You are Logged in and you can delete all accounts");
// });


//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET SINGLE USER (READ)
router.get("/:id", verifyUser, getUser);

//GET ALL USERS(READ ALL)
router.get("/", verifyAdmin, getUsers);

export default router;
