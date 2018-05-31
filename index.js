import express from 'express';

import routes from './app/routes';

const app = express();
const port = 8000;

routes(app, {});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
