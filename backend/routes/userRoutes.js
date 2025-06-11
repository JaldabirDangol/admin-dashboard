import express from "express";
import { register, loginUser, allUser, logout } from "../controller/user_controller.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', loginUser);
router.get('/logout',logout);
router.get('/getalluser/:id',authMiddleware, isAdmin ,allUser); 

export default router;