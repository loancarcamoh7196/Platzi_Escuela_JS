import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

/**
 * Constantes para texto elementos html
 */
import headerLogoLandingPageURL from '../assets/static/logo-platzi-video-BW2.png';
import headerUserLandingPageURL from '../assets/static/user-icon.png';

const headerLogoLandingPageAlt = 'Video-Logo';
const headerMenuTitle = 'Perfil';
const headerUserLandingPageAlt = 'Usuario ;)';
const headerMenuAccountURL = '#';
const headerMenuAccountText = 'Cuenta';
const headerMenuSessionURL = '#';
const headerMenuSessionText = 'Cerrar Sesión';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={headerLogoLandingPageURL} alt={headerLogoLandingPageAlt} />
    </Link>
    
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={headerUserLandingPageURL} alt={headerUserLandingPageAlt} />
        <p>{ headerMenuTitle }</p>
      </div>

      <ul>
        <li><a href={headerMenuAccountURL}>{headerMenuAccountText}</a></li>
        <li><a href={headerMenuSessionURL}>{headerMenuSessionText}</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
