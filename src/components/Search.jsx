import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main" >
        <h2 className="main__title">¿Que quieres ver hoy?</h2>
        <input type="text" className="main__input__buscador" id="main__buscador" placeholder="Buscar..." />
    </section>
);

export default Search;