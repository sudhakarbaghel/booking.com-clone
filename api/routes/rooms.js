import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
const router = express.Router();
import {verifyAdmin}  from "../utils/verifyToken.js"





router.post("/:hotelid", verifyAdmin, createRoom)
//update
router.put("/:id", verifyAdmin, updateRoom)
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

//get
router.get("/:id", getRoom)
//get All
router.get("/", getRooms)


 

export default router;