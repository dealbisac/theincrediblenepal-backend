import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

//GET SINGLE ROOM (READ)
router.get("/:id", getRoom);

//GET ALL ROOMS(READ ALL)
router.get("/", getRooms);


export default router;