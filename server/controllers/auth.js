import UserModel from "../Models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Register user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isUsed = await UserModel.findOne({ username });

        if (isUsed) {
            return res.status(402).json({
                message: `name ${username} already used`
            })
        }

        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);

        const newUser = new UserModel({
            username, password: hash
        })

        await newUser.save();

        res.status(201).json({
            newUser,
            message: 'User created successfully'
        })
    } catch (error) {
        res.json({
            message: `Error during the user registration`,
            error: error.toString()
        })
    }
}
// Login user
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await UserModel.findOne({username});

        if (!user) {
            return res.status(404).json({
                message: `User ${username} not found`
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: `User ${username} password is not correct!`
            })
        }

        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET, {expiresIn: '30d'})

        res.status(303).json({
            token, user, message: `${username} has entered to the system`
        })




    } catch (error) {
        res.json({
            message: `Error during the user login`,
            error: error.toString()
        })
    }
}

// Get user
export const self = async (req, res) => {
    try {
        res.json({
            message: 'Hello!'
        })
    } catch (error) {

    }
}