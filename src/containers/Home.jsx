import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

const Home = ({ myList, witcher, papel, trends, originals }) => {
  // const [videos, categories] = useInitialState(API); // Declaracion de uso de API

  // const lists = [witcher, papel, trends, originals];
  const categories = ['Favoritos', 'The Witcher', 'La Casa de Papel', 'Tendencias', 'Originales'];

  return (
    <>
      <Search />
      {/* {
        categories.map((category, i) => (
          lists[i].length > 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {lists[i].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
        ))
      } */
      }
      <Categories title={categories[0]}>
        <Carousel>
          {myList?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
            );
          })}
        </Carousel>
      </Categories>
      <Categories title={categories[1]}>
        <Carousel>
          {witcher?.map((item) => {
            return (
              <CarouselItem key={item.id} {...item} />
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
  };
};

export default connect(mapStateToProps, null)(Home);
