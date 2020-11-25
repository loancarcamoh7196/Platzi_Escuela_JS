import React from 'react';
import '../assets/styles/components/Search.scss';

/**
 * Constantes para texto elementos html
 */
const mainSearchTitle = '¿Que quieres ver hoy?';
const mainSearchPlaceHolder = 'Buscar...';

const Search = () => (
    <section className="main" >
        <h2 className="main__title">{ mainSearchTitle }</h2>
        <input type="text" className="main__input__buscador" id="main__buscador" placeholder={mainSearchPlaceHolder} />
    </section>
);

export default Search;