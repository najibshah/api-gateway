const axios = require("axios");
const { default: accessEnv } = require("../../src/helpers/accessEnv");
const formsURI = accessEnv("FORMS_SERVICE_URI");

export function addNewForm(req, res) {
  axios
    .post(`${formsURI}/new-form`, { data: req.body })
    .then((response) => {
      res.json(response.data);
    })
    .catch((response) => {
      return res.status(400).json(response.response.data);
    });
}
