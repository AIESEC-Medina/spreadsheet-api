const http = require('http');
const express = require('express');
const { client } = require('./controllers/auth-client');
const { googleSheetRun } = require('./controllers/generateApi');

const app = express();
app.use(express.json());
const router = express.Router();

const port = process.env.PORT || 8000;
const server = http.createServer(app);

client.authorize(async (err) => {
  if (err) return;
  const data = await googleSheetRun('1d4xiV1pOSoF8BmAfwQi_mzrD3CE_D5Cp1kf-fuSAaQ4', 'Data');

  app.use(
    '/',
    router.get('/', (req, res) => {
      res.send(data);
    }),
  );

  server.listen(port, () => {
    console.log(`> 🚀 Ready on http://localhost:${process.env.PORT}`);
  });
});
