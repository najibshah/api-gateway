const express = require("express");
const router = express.Router();
const { getAllForms, addNewForm, testGet, testPost } = require("../functions");

// @route   GET /form/test
// @desc    Tests forms get route
// @access  Public
router.get("/test", (req, res) => testGet(req, res));

// @route   POST /form/test
// @desc    Tests forms post route
// @access  Public
router.post("/test", (req, res) => testPost(req, res));

// @route   GET /form/forms
// @desc    Get all forms
// @access  Public
router.get("/forms", (req, res) => getAllForms(req, res));

// @route   POST /form/new-form
// @desc    Adds new form to database
// @access  Public
router.post("/new-form", (req, res) => addNewForm(req, res));

module.exports = router;
