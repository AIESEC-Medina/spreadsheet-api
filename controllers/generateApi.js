const { google } = require("googleapis");
const auth = require("./auth-client");
const gsapi = google.sheets({ version: "v4", auth: auth.client });
const { TransformApi } = require("./TransformApi");

exports.googleSheetRun = async (sheetId, rangeName) => {
  const options = {
    spreadsheetId: sheetId,
    range: rangeName,
  };
  let data = (await gsapi.spreadsheets.values.get(options)).data.values;
  TransformApi(data, options);
};
