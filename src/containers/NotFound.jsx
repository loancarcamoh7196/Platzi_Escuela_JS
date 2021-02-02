import React from 'react';
import '../assets/styles/components/NotFound.scss';
import notFoundImage from '../assets/static/404.png';

const NotFound = () => (
  <section className='not-found'>
    <div className='box'>
      <img src={notFoundImage} alt='' className='text animated rubberBand' />
    </div>
    <h5> Auch, algo se rompio</h5>
    <h4>Te perdiste?</h4>
    <a href="/">Volver al Inicio</a>
  </section>

);

export default NotFound;
