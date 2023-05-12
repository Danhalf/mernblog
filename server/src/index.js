import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

//constants
const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req,res) => {
    res.json({message: 'its cool'})
})

const start = async () => {
    try {
        await  mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@dmdb.572jzno.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()