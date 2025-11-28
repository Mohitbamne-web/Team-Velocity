// middleware/authMiddleware.js - Verify JWT token and check roles
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// Middleware to verify if user is logged in (has valid token)
const authToken = async (req, res, next) => {
  try {
    // Get token from Authorization header (format: "Bearer TOKEN")
    const token = req.headers.authorization?.split(' ')[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: 'No token provided. Access denied.' });
    }

    // Verify token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user from database using the ID from token
    const user = await User.findById(decoded.id).select('-password'); // Don't include password

    if (!user) {
      return res.status(401).json({ message: 'User not found. Access denied.' });
    }

    // Attach user info to request object so next middleware/route can use it
    req.user = user;
    next(); // Continue to next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token. Access denied.' });
  }
};

// Middleware to check if user has one of the allowed roles
const roleCheck = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if user's role is in the allowed roles array
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Access denied. Only ${allowedRoles.join(', ')} can access this route.` 
      });
    }
    next(); // User has correct role, continue
  };
};

module.exports = { authToken, roleCheck };