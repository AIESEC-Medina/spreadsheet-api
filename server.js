const { client } = require("./controllers/auth-client");
const {googleSheetRun} = require("./controllers/GenerateApi");

client.authorize(function (err, tokens) {
  if (err) return;
  else googleSheetRun("1d4xiV1pOSoF8BmAfwQi_mzrD3CE_D5Cp1kf-fuSAaQ4", "Data");
});
