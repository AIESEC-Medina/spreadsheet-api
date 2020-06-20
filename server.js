const http = require('http');
const express = require('express');
const { client } = require('./controllers/auth-client');
const { googleSheetRun } = require('./controllers/generateApi');

const app = express();
app.use(express.json());
const router = express.Router();

const server = http.createServer(app);

client.authorize(async (err) => {
  if (err) return;
  const data = await googleSheetRun('12OSu-GEmTptpNme1Kv3xtxvOezirdLZ1hhEIudtucH4', 'SIGN-UPs');

  app.use(
    '/',
    router.get('/', (req, res) => {
      res.send(data);
    }),
  );

  server.listen(process.env.PORT, () => {
    console.log(`> 🚀 Ready on http://localhost:${process.env.PORT}`);
  });
});
