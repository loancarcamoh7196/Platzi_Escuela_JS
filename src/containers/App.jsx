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

const App = () => {
  /**
   * Como necesito mi lista de objeto para utilizarlo
   * Nota: Si hay un error de consoladiciendo que la propiedad length o map no existe
   * o no se puede usar hay que especificar que lista de objectos, se desean traer desde la API
  */
  const [videos, setVideos] = useState([{ mylist: [], trends: [], originals: [] }]);

  //Permite ir a mi FakeAPI, obtiene info y la envia a f(x) setVideo para procesarla
  // UseEffect necesita 2 parametros; el arreglo que necesita con la info de conexión a la API, con su comportamiento (response y data); y cuantas veces se  desea ejecutar esa consulta
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  //console.log(videos);

  return (
    <div className="App">
      <Header />
      <Search />
      {
       /**
       * Valida si Lista no esta vacia y se existe, para qu no haya problemas de interrupcion de codigo
       */
        videos.mylist?.length > 0 && (
          <Categories title="Mi Lista">
            <Carousel>
             {videos.mylist?.map(item => <CarouselItem key={item.id} { ...item }/> 
             )}
            </Carousel>
          </Categories> 
        )
      }

      <Categories title="Tendencias">
      <Carousel>
        {
          videos.trends?.map(item =>
            <CarouselItem key={item.id} { ...item }/>
          )
        }
      </Carousel>
    </Categories>

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