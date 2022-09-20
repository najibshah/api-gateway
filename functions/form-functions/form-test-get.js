const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const formsURI = accessEnv("FORMS_SERVICE_URI");

export function formTestGet(req, res) {
  axios
    .get(`${formsURI}/test`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("forms test api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
}
