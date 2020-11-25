import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

/**
 * Constantes para texto elementos html
 */
const itemCoverURL = "https://media.wired.com/photos/5dcd7e84a14c980008129bb5/1:1/w_468,h_468,c_limit/Culture_Monitor_TheWitcher2.jpg";
const itemCoverAlt = "The Witcher";
const itemPlayURL = "../assets/icons8-usuario-48.png";
const itemPlayAlt = "Play";
const itemPlusURL = "../assets/plus-icon.png";
const itemPlusAlt = "Plus";
const itemTitleText = "Título descriptivo";
const itemSubtitleText = "2020 16+ 114 minutos";


const CarouselIteam = () => (
    <div className="carrousel-item">
        <img src={ itemCoverURL } alt={ itemCoverAlt } className="carrousel-item__img" />
        <div className="carrousel-item__details">
            <div>
                <img src={ itemPlayURL } alt={ itemPlayAlt } className ="carrousel-item__play" />
                <img src={ itemPlusURL } alt={ itemPlusAlt } className ="carrousel-item__plus" />
            </div>
            <p className="carrousel-item__title">{ itemTitleText }</p>
            <p className="carrousel-item__subtitle">{ itemSubtitleText }</p>
        </div>
    </div>
);

export default CarouselIteam;