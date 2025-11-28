// routes/adminRoutes.js - Routes only admin can access
const express = require('express');
const { authToken, roleCheck } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /admin/dashboard - Only admin can access
router.get('/dashboard', authToken, roleCheck('admin'), (req, res) => {
  res.json({
    message: 'Welcome to Admin Dashboard!',
    user: {
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

module.exports = router;