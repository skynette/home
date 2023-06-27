import express from 'express';
import { registerUser, loginUser, userLogout } from '../controllers/userController.js';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', userLogout);

export default router;
