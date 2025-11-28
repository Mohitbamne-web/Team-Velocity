// routes/studentRoutes.js - Routes only students can access
const express = require('express');
const { authToken, roleCheck } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /student/dashboard - Only students can access
// First authToken checks if logged in, then roleCheck verifies role is 'student'
router.get('/dashboard', authToken, roleCheck('student'), (req, res) => {
  res.json({
    message: 'Welcome to Student Dashboard!',
    user: {
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

module.exports = router;