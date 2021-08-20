import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

/**
 * Constantes para texto elementos html
 */
const mainSearchTitle = '¿Que quieres ver hoy?';
const mainSearchPlaceHolder = 'Buscar...';


const Search = (props) => {
  const { isHome, getVideoSearch } = props;

  const inputStyle = classNames('input', {
    isHome
  });

  const handleInput = (event) => {
    getVideoSearch(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>{ mainSearchTitle }</h2>
      <input
        type='text'
        className={`main__input__buscador ${inputStyle}`}
        id='main__buscador'
        placeholder={mainSearchPlaceHolder}
        onKeyUp={handleInput}
      />

    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

// export default Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
