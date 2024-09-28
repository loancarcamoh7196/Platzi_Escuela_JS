import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
//Hoja de estilo contenedor
import '../assets/styles/App.scss';

/**
 * Mis componentes
 */
//import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import Footer from '../components/Footer';

/**
 * Mis Hooks
 */
// import useInitialState from '../hooks/useInitialState';

/**
 * Mis API
 */
// const API = 'http://localhost:3000/initialState'; // Mi servicio API ~ debe estar corriendo

const Home = (props) => {
  const { myList, witcher, papel, trends, originals, searchResult } = props;
  // const [videos, categories] = useInitialState(API); // Declaracion de uso de API

  console.log(searchResult);

  // const lists = [witcher, papel, trends, originals];
  const categories = ['Mis Favoritos', 'The Witcher', 'La Casa de Papel', 'Tendencias', 'Originales'];

  return (
    <>
      <Header />
      <Search isHome />

      <Categories title='Resultados' />

      <Categories title={categories[0]}>
        <Carousel>
          {myList?.map((item) => {
            return (<CarouselItem key={item.id} {...item} isList />);
          })}
        </Carousel>
      </Categories>
      <Categories title={categories[1]}>
        <Carousel>
          {witcher?.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                {...item}
              />
            );
          })}
        </Carousel>
      </Categories>
      <Categories title={categories[2]}>
        <Carousel>
          {papel?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>
      <Categories title={categories[3]}>
        <Carousel>
          {trends?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>
      <Categories title={categories[4]}>
        <Carousel>
          {originals?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    witcher: state.witcher,
    papel: state.papel,
    trends: state.trends,
    originals: state.originals,
    search: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);
