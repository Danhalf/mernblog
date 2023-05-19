import dotenv from "dotenv";
dotenv.config();


export const PORT = process.env.PORT || 5000;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;