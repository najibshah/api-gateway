const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const authURI = accessEnv("AUTH_SERVICE_URI");
export function updateUserRoles(req, res) {
  axios
    .post(`${authURI}/editUser`, req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("register api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
}
