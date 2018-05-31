const serviceRoutes = (app, db) => {
  app.post('/services', (req, res) => {
    res.send('Hello from services');
  });
};

export default serviceRoutes;
