const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const {
    registerUser,
    loginUser,
    refreshAccessToken,
    getAllUsers,
    updateUserProfile,
    deleteUser,
    getUserProfile
} = require('../Controllers/userController');

const { protect, admin } = require('../middleware/authMiddleware');

// Rate limiting for login route to prevent brute-force
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});

// @route   POST /api/auth/register
router.post('/register', registerUser);

// @route   POST /api/auth/login
router.post('/login', loginLimiter, loginUser);

// @route   POST /api/auth/refresh
router.post('/refresh', refreshAccessToken);

// @route   GET /api/auth/profile
router.get('/profile', protect, getUserProfile);

// @route   PUT /api/auth/profile
router.put('/profile', protect, updateUserProfile);

// @route   GET /api/auth/ (Admin only)
router.get('/', protect, admin, getAllUsers);

// @route   DELETE /api/auth/:id (Admin only)
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;