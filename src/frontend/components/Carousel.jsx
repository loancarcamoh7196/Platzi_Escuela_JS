import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <div className='carrousel__container'>
    { children }
  </div>
);

export default Carousel;
