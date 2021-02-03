/**
 * Archivo configuracion de proyecto
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStpre } from 'redux';

/***
 * El componente principal ha sido reemplaado por
 */
import App from './routes/App'; //<-- Contenedor Principal

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
