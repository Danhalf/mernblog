import { Router } from "express";
import { register, login, self } from "../controllers/auth.js";


const router = new Router();

// Register user
router.post('/register', register)

// Login user
router.post('/login', login)

// Get user
router.get('/self', self)

export default router
