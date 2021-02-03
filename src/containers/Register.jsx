import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2 className='register-title'>Registrate</h2>
      <form action='' className='register__container--form'>
        <input type='text' className='input' placeholder='Nombres' />
        <input type='text' className='input' placeholder='Apellido Paterno' />
        <input type='text' className='input' placeholder='Apellido Materno' />
        <input type='text' className='input' placeholder='Corr  eo' />
        <input type='password' className='input' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarse</button>

      </form>
      <section className='register__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />

          Inicia sesión con Google

        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />

          Inicia sesión con Twitter

        </div>
      </section>
      <p className='register__container--register'>
        Tienes cuenta?
        <Link to='/login'>
          Inicia Sesión
        </Link>
      </p>
    </section>
  </section>
);

export default Register;
