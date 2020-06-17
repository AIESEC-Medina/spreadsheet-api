const { client } = require('./controllers/auth-client');
const { googleSheetRun } = require('./controllers/generateApi');

client.authorize(async (err) => {
  if (err) return;
  googleSheetRun('1d4xiV1pOSoF8BmAfwQi_mzrD3CE_D5Cp1kf-fuSAaQ4', 'Data');
});
