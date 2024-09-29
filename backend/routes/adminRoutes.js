import express from 'express';
import { registerAdmin } from '../controllers/adminController.js';
import { loginAdmin } from '../controllers/adminController.js';
import { createQuiz } from '../controllers/quizController.js';

import { protectAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Admin routes for signup and login
router.post('/signup', registerAdmin);
router.post('/login', loginAdmin);

// Admin protected route for creating quiz
// router.post('/quiz', protectAdmin,createQuiz);
router.post('/quiz1', protectAdmin,createQuiz);
export default router;
