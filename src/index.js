require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const formsService = require("../routes/formsService");
const authService = require("../routes/authService");
const { default: accessEnv } = require("./helpers/accessEnv");

const app = express();
const port = accessEnv("PORT") || 7650;

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/form", formsService);
app.use("/auth", authService);

// test routes
app.get("/", (req, res) => {
  res.send("You've reached the API Gateway service");
});

app.post("/", (req, res) => {
  res.send("You've reached the API Gateway service");
});

app.listen(port, () => {
  console.log(`API Gateway is now running at port: ${port}`);
});
