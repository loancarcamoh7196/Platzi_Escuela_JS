import express from 'express';
import webpack from 'webpack';

const { config } = require('../../config');

const app = express();

if(config.env === 'development') {
  console.log('DEV MODE');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  // const serverConfig = { port: PORT, hot: true }; -- webpackDevMiddleware version 3.7.2

  const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else if (config.env === 'production') {
  console.log('PRODUCTION MODE');
}

app.get('*', (req, res) => {
  res.send({ hello: 'Hola, ten un buen día' });
});

app.listen(config.port, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log(`Server corriendo en puerto ${config.port} ...`);
});
