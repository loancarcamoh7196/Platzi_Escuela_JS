import React from 'react';

//Hoja de estilo contenedor
import '../assets/styles/App.scss';

/**
 * Mis componentes
 */
import Header from '../components/Header';
import Search from '../components/Search';


const App = () => (
    <div className="App">
        <Header />
        <Search />
    </div>
);

export default App;