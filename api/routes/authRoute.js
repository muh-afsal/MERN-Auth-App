
import  Express  from "express";
import { signup } from "../controllers/authController.js";


const router=Express.Router();


router.post("/signup",signup)


export default router;
