const express = require("express");
const router = express.Router();
const {
  authTestGet,
  authTestPost,
  getAllUsers,
  getUser,
  registerUser,
  loginUser,
  updateUserRoles,
} = require("../functions/");

// @route   GET /auth/test
// @desc    Tests auth get route
// @access  Public
router.get("/test", (req, res) => authTestGet(req, res));

// @route   POST /auth/test
// @desc    Tests auth post route
// @access  Public
router.post("/test", (req, res) => authTestPost(req, res));

// @route   GET /auth/users
// @desc    Get all users
// @access  Public
router.get("/users", (req, res) => getAllUsers(req, res));

// @route   GET /auth/users
// @desc    Get  user by email
// @access  Public
router.get("/:email", (req, res) => getUser(req, res));

// @route   Post /auth/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => registerUser(req, res));

// @route   Post /auth/editUser
// @desc    edit user
// @access  Public
router.post("/editUser", (req, res) => updateUserRoles(req, res));

// @route   POST /auth/login
// @desc    Login User -> Return JWT token
// @access  Public
router.post("/login", (req, res) => loginUser(req, res));

module.exports = router;
