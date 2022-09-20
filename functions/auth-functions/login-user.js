const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const authURI = accessEnv("AUTH_SERVICE_URI");
export function loginUser(req, res) {
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
}
