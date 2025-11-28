// routes/facultyRoutes.js - Routes only faculty can access
const express = require('express');
const { authToken, roleCheck } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /faculty/dashboard - Only faculty can access after login
router.get('/dashboard', authToken, roleCheck('faculty'), (req, res) => {
  res.json({
    message: 'Welcome to Faculty Dashboard!',
    user: {
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

module.exports = router;