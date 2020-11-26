import React from 'react';
import '../assets/styles/components/Header.scss';

/**
 * Constantes para texto elementos html
 */
import  headerLogoLandingPageURL from '../assets/static/logo-platzi-video-BW2.png';
const headerLogoLandingPageAlt = "Video-Logo";
import headerUserLandingPageURL from "../assets/static/user-icon.png";
const headerMenuTitle = "Perfil";
const headerUserLandingPageAlt = "Usuario ;)";
const headerMenuAccountURL = "#";
const headerMenuAccountText = "Cuenta";
const headerMenuSessionURL = "#";
const headerMenuSessionText = "Cerrar Sesión";


const Header = () => (
    <header className="header">
        <img className="header__img" src={ headerLogoLandingPageURL } alt={ headerLogoLandingPageAlt } />
        <div className="header__menu">
            <div className="header__menu--profile">
            <img src={ headerUserLandingPageURL } alt={ headerUserLandingPageAlt } />
            <p>{ headerMenuTitle }</p>
            </div>

            <ul>
            <li><a href={ headerMenuAccountURL }>{ headerMenuAccountText }</a></li>
            <li><a href={ headerMenuSessionURL }>{ headerMenuSessionText }</a></li>
            
            </ul>
        </div>
    </header>
);


export default Header;