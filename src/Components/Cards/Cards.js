import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('http://localhost:5000/products?size=6');
      setProducts(data)
    }
    func()
  }, [])
  return (
    <div className='w-[65%] mx-auto grid grid-cols-2 lg:grid-cols-6 justify-center justify-items-center gap-0'>
      {
        products.map(elProd => <Card key={elProd._id} elProd={elProd}></Card>)
      }
    </div>
  );
};

export default Cards;