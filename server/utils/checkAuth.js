import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../constants/constants.js";

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '');

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);

            req.userId = decoded.id

            next()
        } catch (error) {
            res.status(404).json({
                message: 'Auth error',
                error
            })
        }
    }
}