import React from 'react';
// Conectar app a Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Importar Acciones
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

/**
 * Constantes para texto elementos html
 */

import itemPlayURL from '../assets/static/icons8-usuario-48.png';
import itemPlusURL from '../assets/static/plus-icon.png';

const itemPlusAlt = 'Plus';
const itemPlayAlt = 'Play';

const CarouselIteam = (props) => {
  //Recuperamos lo necesario de cada item y lo convertimos en constantes
  const { cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration
    })
  };

  return (
    <div className='carrousel-item'>
      <img src={cover} alt={title} className='carrousel-item__img' />
      <div className='carrousel-item__details'>
        <div>
          <img src={itemPlayURL} alt={itemPlayAlt} className='carrousel-item__play' />
          <img
            src={itemPlusURL}
            alt={itemPlusAlt}
            className='carrousel-item__plus'
            onClick={handleSetFavorite}
          />
        </div>
        <p className='carrousel-item__title'>{ title }</p>
        <p className='carrousel-item__subtitle'>{ `${year} ${contentRating} ${duration}` }</p>
      </div>
    </div>
  );
};

/**
 * Valida tipo de datos Usados
 */
CarouselIteam.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

/**
 * Agregar accion de redux
 */
const mapDispatchToProps = {
  setFavorite,
}

// export default CarouselIteam; //Linea innecesaria
export default connect(null, mapDispatchToProps)(CarouselIteam);
