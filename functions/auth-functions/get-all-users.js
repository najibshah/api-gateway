const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const authURI = accessEnv("AUTH_SERVICE_URI");
export function getAllUsers(req, res) {
  axios
    .get(`${authURI}/users`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("get users api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
}
