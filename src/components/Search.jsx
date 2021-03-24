import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

/**
 * Constantes para texto elementos html
 */
const mainSearchTitle = '¿Que quieres ver hoy?';
const mainSearchPlaceHolder = 'Buscar...';

const Search = (props) => {
  const { isHome } = props;

  const inputStyle = classNames('input', {
    isHome
  });

  return (
    <section className='main'>
      <h2 className='main__title'>{ mainSearchTitle }</h2>
      <input type='text' className={`main__input__buscador ${inputStyle}`} id='main__buscador' placeholder={mainSearchPlaceHolder} />
    </section>
  );
};

export default Search;
