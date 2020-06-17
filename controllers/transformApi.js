const { google } = require("googleapis");
const auth = require("./auth-client");
const gsapi = google.sheets({ version: "v4", auth: auth.client });

exports.TransformApi = async (data, opt) => {
  const Objectproperties = (
    await gsapi.spreadsheets.values.get(opt)
  ).data.values[0].map((val) => val.replace(/\s/g, ""));
  const rows = data.filter((currentRow, index) => index != 0);
  const objects = rows.map((array) => {
    return array.reduce((accumulator, currentValue, index) => {
      return {
        ...accumulator,
        [Objectproperties[index]]: currentValue,
      };
    }, {});
  });

  const reverseTransform = (objects) => {
    return objects.map((dict) => Object.values(dict));
  };
};
