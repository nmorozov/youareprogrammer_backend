import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import routes from './app/routes';
import CONNECTION_URL from './config/db';

const app = express();
const port = 8000;

const dbName = 'youareprogrammer';

app.use(bodyParser.json());

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);

  const db = client.db(dbName);

  routes(app, db);

  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });

  return true;
});
