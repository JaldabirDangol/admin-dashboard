import express from "express";
import { register, loginUser, allUser } from "../controller/user_controller.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', loginUser);
router.get('/users', authMiddleware, isAdmin ,allUser); 

export default router;