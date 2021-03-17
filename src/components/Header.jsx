import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';

/**
 * Constantes para texto elementos html
 */
import logoInsignia from '../assets/static/logo-platzi-video-BW2.png';
import iconUser from '../assets/static/user-icon.png';

/**
 * Constantes para texto harcodeados
 */
const textHeader = {
  urlDirection: '#',
  logoLandingPageAlt: 'Video-Logo',
  menuTitle: 'Perfil',
  userLandingPageAlt: 'Usuario ;)',
  menuAccountText: 'Cuenta',
  menuSessionText: 'Cerrar Sesión',
  menuWelcomeTxt: 'Bienvenido ',
  menuRegisterText: 'Registraté',
  menuLoginText: 'Ingresa',
};

const Header = ({ user }) => {
  console.log(user.email);

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logoInsignia} alt={textHeader.logoLandingPageAlt} />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={iconUser}
            alt={textHeader.userLandingPageAlt}
          />
          <p>{ textHeader.menuTitle }</p>
        </div>

        {
          (user.email !== undefined) ? (
            <ul>
              <li>
                <p>{`${textHeader.menuWelcomeTxt} ${user.email}`}</p>
              </li>
              <li>
                <Link to='/'>{`${textHeader.menuAccountText}`}</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to='/register'>{`${textHeader.menuRegisterText}`}</Link>
              </li>
              <li>
                <Link to='/login'>{textHeader.menuLoginText}</Link>
              </li>
            </ul>
          )
        }

      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

// export default Header;
export default connect(mapStateToProps, null)(Header);
