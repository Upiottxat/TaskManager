import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./Routes/auth.routes.js"
import tasksRoutes from "./Routes/tasks.routes.js"
import { connectToDatabase } from './config/db.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));



app.use("/api/auth", authRoutes)
app.use("/api/tasks", tasksRoutes)

app.get("/", (req, res) => {
    res.send("Hello world !!")
})
app.get("/testJson", (req, res) => {
    res.send(JSON.stringify({ "Hello world": "Hello world " }))
})
app.post("/", (req, res) => {
    res.status(200).json({ "Hello world": req.body })
})


app.listen(PORT, function () {
    console.log("listening on port ", PORT);
    const conn = connectToDatabase();

})