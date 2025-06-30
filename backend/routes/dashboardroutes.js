
import express from "express"
import { dashboard } from "../controller/dashboard.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.get("/dashboard",authMiddleware,isAdmin,dashboard);

export default router;