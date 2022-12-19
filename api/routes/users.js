import express from "express"
const router = express.Router();
import {  deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";



router.get("/checkauthentication", verifyToken, (req, res, next) => {
     
     res.send("hello user, You are logged in!")
})
 
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, You are logged in and you can delete your account!")
})

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello Admin, You are logged in and you can delete all account!")
})


//update

router.put("/:id",verifyUser,  updateUser)
//delete
router.delete("/:id", verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)
//get All
router.get("/",verifyAdmin, getUsers)

export default router;