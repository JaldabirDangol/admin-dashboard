import express from "express";
import { register, loginUser, allUser, logout, changeRole, amILogin } from "../controller/user_controller.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', loginUser);
router.get('/logout',logout);
router.get('/getalluser',authMiddleware, isAdmin ,allUser); 
router.post('/changerole/:id',authMiddleware, isAdmin ,changeRole); 
router.get("/amilogin",authMiddleware,amILogin)

export default router;