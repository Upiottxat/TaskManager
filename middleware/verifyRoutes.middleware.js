import dotenv from 'dotenv'
import { GetUser } from '../Model/User.model.js';
dotenv.config()
export const verifyRoute = async (req, res, next) => {
    try {
        const token = req.cookie.jwt;
        if (!token) return res.status(401).json({ error: "Unauthorized - No token provied " })
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        const user = await GetUser(decoded.userId);
        if (!user) return res.status(401).json({ error: "user not found" })
        if (user.hasOwnProperty("password")) user.password = ""
        req.user = user;
        next();

    } catch (error) {
        console.log("error in  protectRoute middleware ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }

}