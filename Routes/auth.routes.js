import express from "express";
import { login, signup, logout } from "../Controller/auth.controller.js";
import { verifyRoute } from "../middleware/verifyRoutes.middleware.js";

const router = express.Router();


router.post('/login', login)

router.post('/signup', signup)

router.post('/logout', verifyRoute, logout)

export default router;