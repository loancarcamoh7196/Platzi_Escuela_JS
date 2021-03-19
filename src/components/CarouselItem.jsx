import React from 'react';
// Conectar app a Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Importar Acciones
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

/**
 * Constantes para texto elementos html
 */

import itemPlayURL from '../assets/static/icons8-usuario-48.png';
import itemPlusURL from '../assets/static/plus-icon.png';
import itemDeleteURL from '../assets/static/remove-icon.png';

/**
 * Constante para texto harcodeado de card item
 */
const txtItem = {
  itemPlusAlt: 'Plus',
  itemPlayAlt: 'Play',
  itemDeleteAlt: 'Quitar',
};

const CarouselIteam = (props) => {
  //Recuperamos lo necesario de cada item y lo convertimos en constantes
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id)
  };

  return (
    <div className='carrousel-item'>
      <img src={cover} alt={title} className='carrousel-item__img' />
      <div className='carrousel-item__details'>
        <div>
          <img
            src={itemPlayURL}
            alt={txtItem.itemPlayAlt}
            className='carrousel-item__play'
          />
          {isList ? (
            <img
              src={itemDeleteURL}
              alt={txtItem.itemDeleteAlt}
              className='carrousel-item__plus'
              onClick={handleDeleteFavorite}
            />
          ) : (
            <img
              src={itemPlusURL}
              alt={txtItem.itemPlusAlt}
              className='carrousel-item__plus'
              onClick={handleSetFavorite}
            />
          )}

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
  id: PropTypes.string,
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
  deleteFavorite,
};

// export default CarouselIteam; //Linea innecesaria
export default connect(null, mapDispatchToProps)(CarouselIteam);
