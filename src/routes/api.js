import express from "express";
import {
    createUser, 
    deleteUser ,
    getAllUsers,
    updateUsers,
} from "../controller/user.controller.js"

const router = express.Router();

router.get("/users" , getAllUsers);
router.post("/user/create" , createUser);
router.patch("/user/update/:id" , updateUsers);
router.delete("/user/delete/:id" , deleteUser);

export default router;



