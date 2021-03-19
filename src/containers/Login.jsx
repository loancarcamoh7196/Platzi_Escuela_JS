import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const txtLogin = {
  emailPlaceholder: 'Correo',
  passPlaceholder: 'Contraseña',
  sessionText: 'Iniciar Sesión',
  rememberMeText: 'Recuerdame',
  forgetText: 'Olvide mi contraseña',
  loginGoogleText: 'Inicia sesión con Google',
  loginTwitterText: 'Inicia sesión con Twitter',
  dontHaveAccountText: 'No tienes ninguna cuenta?',
  registerText: 'Regístrate',
  googleAltText: 'Google',
  twitterAltText: 'Twitter',
};

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',

  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 className='login-title'>Inicia Sesión</h2>
        <form
          className='login__container--form'
          onSubmit={handleSubmit}
        >

          <input
            name='email'
            type='text'
            className='input'
            placeholder={txtLogin.emailPlaceholder}
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='input'
            placeholder='{txtLogin.passPlaceholder}'
            onChange={handleInput}
          />
          <button className='button' type='submit'>{txtLogin.sessionText}</button>

          <div className='login__container--remember--me'>
            <label>
              <input type='checkbox' name='' id='cbox1' value='checkbox' />
              {txtLogin.rememberMeText}
            </label>
            <Link >{txtLogin.forgetText}</Link>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt={txtLogin.googleAltText} />
            {txtLogin.loginGoogleText}
          </div>
          <div>
            <img src={twitterIcon} alt={txtLogin.twitterAltText} />
            {txtLogin.loginTwitterText}
          </div>
        </section>
        <p className='login__container--register'>
          {txtLogin.dontHaveAccountText}
          <Link to='/register'>
            {txtLogin.registerText}
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
// export default Login;
export default connect(null, mapDispatchToProps)(Login);
