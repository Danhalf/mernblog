import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';

import { PORT, DB_NAME, DB_PASSWORD, DB_USER } from "../constants/constants.js";

console.log(DB_NAME);

import authRouter from '../routes/auth.js'

const app = express();


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${ DB_USER }:${ DB_PASSWORD }@dmdb.572jzno.mongodb.net/${ DB_NAME }?retryWrites=true&w=majority`
        )
        app.listen(PORT, () => {
            console.log(`Server started at port ${ PORT }`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()