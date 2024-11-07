const express = require("express");
const router = express.Router();

// Middleware to check if user is authenticated
function authMiddleware(req, res, next) {
  if (!req.user) {
    return res.status(403).send("Unauthorized. Please log in.");
  }
  next();
}

// Admin Dashboard Route
router.get("/", authMiddleware, (req, res) => {
  res.send("Welcome to the Admin Dashboard.");
});

// Admin - Students List Route
router.get("/students", authMiddleware, (req, res) => {
  res.send("This is the Students List page.");
});

// Admin - Edit Student Route
router.get("/students/edit", authMiddleware, (req, res) => {
  res.send("Edit Student page.");
});

// Admin - New Student Route
router.get("/students/new", authMiddleware, (req, res) => {
  res.send("Add a New Student page.");
});

module.exports = router;
