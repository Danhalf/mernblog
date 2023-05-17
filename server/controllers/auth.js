import UserModel from "../Models/User.js";
import bcrypt from 'bcryptjs';

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

        res.status(202).json({
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

    } catch (error) {

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