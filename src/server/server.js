/**
 * Archivo Configuración de Servicio HTTP ~ Servidor
 * Lado Backend
 */
import express from 'express';
import webpack from 'webpack';// Modele Bundler
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server'; // Renderiza las respuesta dell server a String
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';// Recibe Array de ruta de lado Servidor
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';// Array de Rutas
import initialState from '../frontend/initialState'; // Archivo mocks con Data

const { config } = require('../../config');// Archivo de config de Variables de Entorno

const app = express();

if (config.env === 'development') {
  console.log('DEV MODE');
  const webpackConfig = require('../../webpack.config.prueba');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  // const serverConfig = { port: PORT, hot: true }; -- webpackDevMiddleware version 3.7.2

  const serverConfig = { serverSideRender: true, publicPath: webpackConfig.output.publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else if (config.env === 'production') {
  console.log('PRODUCTION MODE');

  app.use(express.static(`${__dirname}/public`));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
  // app.disable('x-powered-by');
}

/**
 * Inserta en codigo html renderizado dentro del Contenedor de la página
 * @param {*} html Contenido renderizado
 * @param {*} preloadedState Data a desplegar
 * @returns String Texto completo a desplegar de la página
 */
const setResponse = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="assets/app.css" type="text/css">
        <title>Platzi Video</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
        </script>
        <script src="assets/app.js" type="text/javascript"></script>
      </body>
    </html>
  `);
};

/**
 * Renderizada página solicitada
 * @param {*} req Petición http
 * @param {*} res Respuesta renderizada
 */
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={reducer.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState)); // contenido de la pagina ya renderezado carga
};

app.get('*', renderApp);

app.listen(config.port, (err) => {
  (err) ? console.log('ERROR: ', err) : console.log(`Server corriendo en puerto http://127.0.0.1:${config.port} ...`);
});
