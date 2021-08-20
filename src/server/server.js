import express from 'express';
import dotenv from 'dotenv';

dotenv.config();// Define y buscr variable de entorno
const {ENV, PORT} = process.env;

const app = express();

if(ENV === 'development') {
  console.log('DEV MODE');
} else if (ENV === 'prouction') {
  console.log('PRODUCTION MODE');
}

app.get('*', (req, res) => {
  res.send({ hello: 'Hola, ten un buen día' });
});

app.listen(PORT, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log(`Server corriendo en puerto ${PORT} ...`);
});
