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

  const serverConfig = { serverSideRender: true, publicPath: webpackConfig.output.publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else if (config.env === 'production') {
  console.log('PRODUCTION MODE');
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="assets/app.css" type="text/css">
        <title>Platzi Video</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="assets/app.js" type="text/javascript"></script>
      </body>
    </html>
  `);
});

app.listen(config.port, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log(`Server corriendo en puerto ${config.port} ...`);
});
