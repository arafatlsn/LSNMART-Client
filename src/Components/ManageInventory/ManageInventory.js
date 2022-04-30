import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProdTable from '../../ProdTable/ProdTable';

const ManageInventory = () => {
  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('http://localhost:5000/products?size=0');
      setProducts(data)
    }
    func()
  }, [])
  console.log(products)
  return (
    products.length && <div className='w-[65%] mx-auto'>
    <ProdTable products={products}></ProdTable>
  </div>
  );
};

export default ManageInventory;