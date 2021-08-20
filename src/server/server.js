import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(3000, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log('Server corriendo en puerto 3000 ...');
});
