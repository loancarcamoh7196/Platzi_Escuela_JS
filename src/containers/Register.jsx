import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const txtRegister = {
  registerTitle: 'Registrate',
  emailPlaceholder: 'Correo',
  passPlaceholder: 'Contraseña',
  fullNamePlaceholder: 'Nombres',
  paternalLastnamePlaceholder: 'Apellido Paterno',
  maternalLastnamePlaceholder: 'Apellido Materno',
  rememberMeText: 'Recuerdame',
  forgetText: 'Olvide mi contraseña',
  loginGoogleText: 'Inicia sesión con Google',
  loginTwitterText: 'Inicia sesión con Twitter',
  dontHaveAccountText: 'No tienes ninguna cuenta?',
  registerText: 'Regístrate',
  googleAltText: 'Google',
  twitterAltText: 'Twitter',
  haveRedirectAccountText: 'Tienes cuenta?',
  loginText: 'Inicia Sesión',
};

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2 className='register-title'>{txtRegister.registerTitle}</h2>
        <form action='' className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            className='input'
            placeholder={txtRegister.fullNamePlaceholder}
            onChange={handleInput}
          />
          <input
            name='paternal_lastname'
            type='text'
            className='input'
            placeholder={txtRegister.paternalLastnamePlaceholder}
            onChange={handleInput}
          />
          <input
            name='maternal_lastname'
            type='text'
            className='input'
            placeholder={txtRegister.maternalLastnamePlaceholder}
            onChange={handleInput}
          />
          <input
            name='email'
            type='text'
            className='input'
            placeholder={txtRegister.emailPlaceholder}
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='input'
            placeholder={txtRegister.passPlaceholder}
            onChange={handleInput}
          />
          <button className='button' type='submit'>{txtRegister.registerText}</button>

        </form>
        <section className='register__container--social-media'>
          <div>
            <img src={googleIcon} alt={txtRegister.googleAltText} />
            {txtRegister.loginGoogleText}
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            {txtRegister.loginTwitterText}
          </div>
        </section>
        <p className='register__container--register'>
          {txtRegister.haveRedirectAccountText}
          <Link to='/login'>
            {txtRegister.loginText}
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

// export default Register;
export default connect(null, mapDispatchToProps)(Register);
