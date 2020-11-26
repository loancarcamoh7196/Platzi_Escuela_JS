import React from 'react';

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

const App = () => (
    <div className="App">
        <Header />
        <Search />

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

export default App;