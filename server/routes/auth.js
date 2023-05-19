import { Router } from "express";
import { register, login, self } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";


const router = new Router();

// Register user
router.post('/register', register)

// Login user
router.post('/login', login)

// Get user
router.get('/self', checkAuth, self)

export default router
