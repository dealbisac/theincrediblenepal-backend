import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController.js";

const router = express.Router();

//UPDATE
router.put("/:id",updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET SINGLE USER (READ)
router.get("/:id", getUser);

//GET ALL USERS(READ ALL)
router.get("/", getUsers);
 
export default router;