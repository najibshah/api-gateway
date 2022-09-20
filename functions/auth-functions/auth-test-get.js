const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const authURI = accessEnv("AUTH_SERVICE_URI");
export function authTestGet(req, res) {
  axios
    .get(`${authURI}/test`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("auth test api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
}
