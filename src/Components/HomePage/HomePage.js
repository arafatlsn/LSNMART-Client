import React from 'react';
import Cards from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';
import LessStock from '../LessStock/LessStock';
import RecentProduct from '../RecentProduct/RecentProduct';

const HomePage = () => {
  return (
    <div className='mt-[.1rem]'>
      <Carousel></Carousel>
      <Cards></Cards>
      <RecentProduct></RecentProduct>
      <LessStock></LessStock>
    </div>
  );
};

export default HomePage;