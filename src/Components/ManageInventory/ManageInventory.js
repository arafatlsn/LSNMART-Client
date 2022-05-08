import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProdTable from '../../ProdTable/ProdTable';

const ManageInventory = () => {
  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    const func = async() => {
      const { data } = await axios.get('https://cryptic-everglades-57877.herokuapp.com/products?size=0');
      setProducts(data)
    }
    func()
  }, [])
  const removeItem = async(item) => {
    const proceed = window.confirm('are you sure?');
    if(proceed){
      const url = `https://cryptic-everglades-57877.herokuapp.com/remove?rmitem=${item}`
      const { data } = await axios.get(url);
      if(data.deletedCount){
        const rmFilter = products.filter(el => el._id !== item);
        setProducts(rmFilter)
    }
    }
  }
  return (
    products.length && <div className='lg:w-[65%] mx-auto overflow-x-auto'>
      <div>
    <ProdTable products={products} removeItem={removeItem}></ProdTable>
  </div>
  <div className='mt-[1.5rem] flex justify-end'><Link className='text-[#187FEF] underline font-bold' to={'/additem'}>Add new Item</Link></div>
    </div>
  );
};

export default ManageInventory;