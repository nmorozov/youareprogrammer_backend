import { ObjectID } from 'mongodb';

const serviceRoutes = (app, db) => {
  app.get('/services', (req, res) => {
    db.collection('services').find({}).toArray((findError, items) => {
      if (findError) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(items);
      }
    });
  });

  app.get('/services/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    db.collection('services').findOne(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        let service = {};

        service = { service, ...item };
        db.collection('specialists')
          .find({ services: id })
          .count((countError, count) => { 
            service = { ...service, r: count };
            res.send(service);
          });
      }
    });
  });

  app.post('/services', (req, res) => {
    const service = { name: req.body.name };
    db.collection('services').insert(service, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

export default serviceRoutes;
