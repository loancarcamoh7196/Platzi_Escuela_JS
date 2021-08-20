import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section id='notfound'>
    <div className='notfound'>
      <div className='notfound-404'>
        <h1>404</h1>
        <h2>Te perdiste?</h2>
      </div>
      <Link to='/'>
        Vuelve al Inicio
      </Link>
    </div>
  </section>

);

export default NotFound;
