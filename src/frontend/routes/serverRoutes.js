/**
 * Rutas del lado del Servidor
 */
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

/**
 * Arreglo con Rutas
 */
const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {

    path: '/player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];
export default routes;
