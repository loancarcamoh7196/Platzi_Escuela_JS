import React, { useState, useEffect } from 'react';

//Hoja de estilo contenedor
import '../assets/styles/App.scss';

/**
 * Mis componentes
 */
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

/**
 * Mis Hooks
 */
import useInitialState from '../hooks/useInitialState';

/**
 * Mis API
 */
const API = 'http://localhost:3000/initialState'; // Mi servicio API ~ debe estar corriendo

const App = () => {
  const [videos, categories] = useInitialState(API); // Declaracion de uso de API

  return (
    <div className="App">
      <Header />
      <Search />
        {
            categories.map(category => (
                videos[category].length > 0 && (
                    
                    <Categories title={category}>
                        <Carousel>
                            {videos[category].map(item => <CarouselItem key={item.id} { ...item }/> ) }
                        </Carousel>
                    </Categories> 

                )
            ))
        }

      <Categories title="The witcher">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

      <Categories title="La Casa de Papel">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

      <Categories title="Para ver más tarde">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

      <Footer />
    </div>
  );
};
export default App;