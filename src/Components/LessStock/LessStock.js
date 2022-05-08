import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LessStockCard from './LessStockCard';

const LessStock = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('https://cryptic-everglades-57877.herokuapp.com/products?size=0')
      const sorting = data.sort((firstQuantity, secondQuantity) => firstQuantity.quantity - secondQuantity.quantity)
      setProducts(sorting.slice(0, 4))
    }
    func()
  }, [])
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-[3rem] mb-[1rem]'>Less Stock Products</h1>
      <div className='lg:w-[64%] mx-auto grid lg:grid-cols-4'>
      {
        products.map(el => <LessStockCard key={el._id} elProd={el}></LessStockCard>)
      }
    </div>
    </div>
  );
};

export default LessStock;