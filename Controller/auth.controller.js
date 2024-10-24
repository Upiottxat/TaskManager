import bcrypt from "bcryptjs"
import dotenv from 'dotenv';
import { CreateNew, GetUser } from '../Model/User.model.js';
import { GenerateToken } from "../utils/jwt.js";
dotenv.config()
export const login = async (req, res) => {

    try {
        const { Email, Password } = req.body;
        if (!Email || !Password) return res.status(401).json({ error: "all feilds are required" })
        const user = await GetUser(Email)

        if (user) {
            const passwordCheck = await bcrypt.compare(Password, user.Password)
            // console.log(passwordCheck);
            if (passwordCheck) {
                await GenerateToken(user.userId, res)
                return res.status(200).json({ msg: "login success" })
            }

        } else {
            return res.status(404).json({ error: "Invalid Email or password" })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error " })
    }

}
export const signup = async (req, res) => {

    try {

        const { Name, Email, Password, confirmPassword } = req.body;
        if (!Name || !Email || !Password || !confirmPassword) return res.status(401).json({ error: "All feilds are required" });
        if (Password !== confirmPassword) return res.status(401).json({ error: "Password not match" });
        const rounds = Number(process.env.ROUNDS);
        const salt = await bcrypt.genSalt(rounds)
        const HashPassword = await bcrypt.hash(Password, salt)
        const user = await CreateNew(Name, Email, HashPassword)
        if (!user.error) await GenerateToken(user.userId, res)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

export const logout = (req, res) => {

}
