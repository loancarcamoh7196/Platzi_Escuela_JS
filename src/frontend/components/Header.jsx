import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';

/**
 * Constantes para texto elementos html
 */
import logoInsignia from '../assets/static/logo-platzi-video-BW2.png';
import iconUser from '../assets/static/user-icon.png';

/**
 * Constantes para texto harcodeados
 */
const txtHeader = {
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

const Header = (props) => {
  const { user, isLogin, isRegister } = props;

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img
          className='header__img'
          src={logoInsignia}
          alt={txtHeader.logoLandingPageAlt}
        />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            Object.keys(user).length > 0 ?
              <img src={gravatar(user.email)} alt={user.email} className='header__menu--gravitar' /> :
              <img src={iconUser} alt={txtHeader.userLandingPageAlt} />
          }
          <p>{ txtHeader.menuTitle }</p>
        </div>

        {
          (user.email !== undefined) ? (
            <ul>
              <li>
                <p>{`${txtHeader.menuWelcomeTxt} ${user.email}`}</p>
              </li>
              <li>
                <Link to='/'>{`${txtHeader.menuAccountText}`}</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to='/register'>{`${txtHeader.menuRegisterText}`}</Link>
              </li>
              <li>
                <Link to='/login'>{txtHeader.menuLoginText}</Link>
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
