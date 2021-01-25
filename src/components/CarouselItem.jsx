import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

/**
 * Constantes para texto elementos html
 */
const itemCoverURL = "https://media.wired.com/photos/5dcd7e84a14c980008129bb5/1:1/w_468,h_468,c_limit/Culture_Monitor_TheWitcher2.jpg";
const itemCoverAlt = "The Witcher";
import itemPlayURL from "../assets/static/icons8-usuario-48.png";
const itemPlayAlt = "Play";
import itemPlusURL from "../assets/static/plus-icon.png";
const itemPlusAlt = "Plus";
const itemTitleText = "Título descriptivo";
const itemSubtitleText = "2020 16+ 114 minutos";


const CarouselIteam = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrousel-item'>
    <img src={ cover } alt={ title } className='carrousel-item__img' />
    <div className='carrousel-item__details'>
            <div>
                <img src={ itemPlayURL } alt={ itemPlayAlt } className ='carrousel-item__play' />
                <img src={ itemPlusURL } alt={ itemPlusAlt } className ='carrousel-item__plus' />
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
}

export default CarouselIteam;