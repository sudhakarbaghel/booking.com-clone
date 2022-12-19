import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();
 import {verifyAdmin} from "../utils/verifyToken.js"


//create
router.post("/",verifyAdmin, createHotel)
//update
router.put("/:id", verifyAdmin, updateHotel)
//delete
router.delete("/:id", verifyAdmin, deleteHotel)

//get
router.get("/find/:id" , getHotel)
//get All
router.get("/",getHotels)
router.get("/countByCity", countByCity )
router.get("/countByType", countByType)


export default router;