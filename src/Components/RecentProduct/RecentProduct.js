import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LessStockCard from '../LessStock/LessStockCard';

const RecentProduct = () => {const [products, setProducts] = useState([])
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('http://localhost:5000/products?size=0');
      setProducts(data.reverse().slice(0, 4));
    }
    func()
  }, [])
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-[3rem] mb-[1rem]'>Recent Added Products</h1>
      <div className='w-[64%] mx-auto grid grid-cols-4'>
      {
        products.map(el => <LessStockCard key={el._id} elProd={el}>{el.time}</LessStockCard>)
      }
    </div>
    </div>
  );
};

export default RecentProduct;