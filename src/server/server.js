import express from 'express';
const { config } = require('../../config');

const app = express();

if(config.env === 'development') {
  console.log('DEV MODE');
} else if (config.env === 'production') {
  console.log('PRODUCTION MODE');
}

app.get('*', (req, res) => {
  res.send({ hello: 'Hola, ten un buen día' });
});

app.listen(config.port, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log(`Server corriendo en puerto ${config.port} ...`);
});
