const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const formsURI = accessEnv("FORMS_SERVICE_URI");

export function getAllForms(req, res) {
  axios
    .get(`${formsURI}/forms`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      console.log("forms test api gateway error " + response);
      return res.status(400).json(response.response.data);
    });
}
