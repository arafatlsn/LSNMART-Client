import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LessStockCard from '../LessStock/LessStockCard';

const RecentProduct = () => {const [products, setProducts] = useState([])
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('https://cryptic-everglades-57877.herokuapp.com/products?size=0');
      setProducts(data.reverse().slice(0, 4));
    }
    func()
  }, [])
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-[3rem] mb-[1rem]'>Recent Added Products</h1>
      <div className='lg:w-[64%] mx-auto grid lg:grid-cols-4'>
      {
        products.map(el => <LessStockCard key={el._id} elProd={el}>{el.time}</LessStockCard>)
      }
    </div>
    </div>
  );
};

export default RecentProduct;