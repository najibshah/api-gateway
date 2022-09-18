const axios = require("axios");
const express = require("express");
const { default: accessEnv } = require("../src/helpers/accessEnv");
const router = express.Router();
const formsURI = accessEnv("FORMS_SERVICE_URI");

// @route   GET /form/test
// @desc    Tests forms get route
// @access  Public
router.get("/test", (req, res) => {
  axios.get(`${formsURI}/test`).then((response) => {
    res.json(response.data);
  });
});

// @route   POST /form/test
// @desc    Tests forms post route
// @access  Public
router.post("/test", (req, res) => {
  axios.post(`${formsURI}/test`).then((response) => {
    res.json(response.data);
  });
});

// @route   GET /form/forms
// @desc    Get all forms
// @access  Public
router.get("/forms", (req, res) => {
  axios.get(`${formsURI}/forms`).then((response) => {
    res.json(response.data);
  });
});

// @route   POST /form/new-form
// @desc    Adds new form to database
// @access  Public
router.post("/new-form", (req, res) => {
  axios
    .post(`${formsURI}/new-form`, { data: req.body })
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log(response.response.data);
      return res.status(400).json(response.response.data);
    });
});

module.exports = router;
