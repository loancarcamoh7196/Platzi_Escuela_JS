/**
 * Archivo configuracion de  proeyecto
 * Lado FrontEnd
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router'; // Agregar React-Router
import {createBrowserHistory } from 'history'; //Agregar History -maneja session
import reducer from './reducers';
import initialState from './initialState'; // Archivo mocks con Data
/***
 * El componente principal ha sido reemplaado por
 */
import App from './routes/App'; //<-- Contenedor Principal


const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

//Inicializar Store -Redux
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
if (module.hot) {
  module.hot.accept();
}
