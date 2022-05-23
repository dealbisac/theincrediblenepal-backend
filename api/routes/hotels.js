import express from "express";
import { createHotel, deleteHotel, getCountByCity, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET SINGLE HOTEL (READ)
router.get("/find/:id", getHotel);

//GET ALL HOTELS(READ ALL)
router.get("/", getHotels);

//GET ALL HOTELS COUNT BY CITY (READ ALL)
router.get("/countByCity", getCountByCity);

//GET ALL HOTELS COUNT BY TYPE (READ ALL)
router.get("/countByType", getHotels);

export default router;