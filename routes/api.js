import e from "express";
import express from "express";
const router = express.Router()


import * as userController from "../app/config/controller/userController.js"
import authmiddleware from "../app/middlewares/authmiddleware.js";
router.post("/register" , userController.registerController);
router.post("/login" , userController.loginController);
router.get("/readuser" , authmiddleware, userController.readUserController);





export default router;