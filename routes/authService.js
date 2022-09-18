const axios = require("axios");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const accessEnv = require("../src/helpers/accessEnv");

const authURI = process.env.AUTH_SERVICE_URI;

// @route   GET /auth/test
// @desc    Tests auth get route
// @access  Public
router.get("/test", (req, res) =>
  axios.get(`${authURI}/test`).then((response) => {
    res.json(response.data);
  })
);

// @route   POST /auth/test
// @desc    Tests auth post route
// @access  Public
router.post("/test", (req, res) => {
  axios
    .post(`${authURI}/test`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("auth test api gateway error " + response);
    });
});

// @route   GET /auth/users
// @desc    Get all users
// @access  Public
router.get("/users", (req, res) => {
  axios
    .get(`${authURI}/users`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("register api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
});

// @route   GET /auth/users
// @desc    Get  user by email
// @access  Public
router.get("/:email", (req, res) => {
  axios
    .get(`${authURI}/${req.params.email}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("register api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
});

// @route   Post /auth/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  axios
    .post(`${authURI}/register`, { data: req.body })
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("register api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
});

// @route   Post /auth/editUser
// @desc    edit user
// @access  Public
router.post("/editUser", (req, res) => {
  axios
    .post(`${authURI}/editUser`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("register api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
});

// @route   POST /auth/login
// @desc    Login User -> Return JWT token
// @access  Public
router.post("/login", (req, res) => {
  axios
    .post(`${authURI}/login`, { data: req.body })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((response) => {
      console.log("login api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
});

// @route   GET /current
// @desc    Return current user
// @access  Private
router.get("/current", (req, res) => {
  const config = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };
  axios
    .get(`${authURI}/current`, config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log(req.headers.authorization);
      console.log(response.response.data);
      res.json(response.response.data);
    });
});

module.exports = router;
