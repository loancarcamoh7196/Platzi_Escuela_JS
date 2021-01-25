import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

/**
 * Constantes para texto elementos html
 */

import itemPlayURL from '../assets/static/icons8-usuario-48.png';
import itemPlusURL from '../assets/static/plus-icon.png';

const itemPlusAlt = 'Plus';
const itemPlayAlt = 'Play';

const CarouselIteam = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrousel-item'>
    <img src={cover} alt={title} className='carrousel-item__img' />
    <div className='carrousel-item__details'>
      <div>
        <img src={itemPlayURL} alt={itemPlayAlt} className='carrousel-item__play' />
        <img src={itemPlusURL} alt={itemPlusAlt} className='carrousel-item__plus' />
      </div>
      <p className='carrousel-item__title'>{ title }</p>
      <p className='carrousel-item__subtitle'>{ `${year} ${contentRating} ${duration}` }</p>
    </div>
  </div>
);

CarouselIteam.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselIteam;
