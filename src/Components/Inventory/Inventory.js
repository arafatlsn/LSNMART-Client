import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs'

const Inventory = () => {
  const [product, setProduct] = useState([]);
  const {_id} = useParams();
  useEffect(() => {
    const func = async() => {
      const url = `http://localhost:5000/product?prod=${_id.split(':')[1]}`
    const { data } = await axios.get(url)
    setProduct(data);
    }
    func()
  }, [])

  console.log(product)
  const { img, name, description, price, quantity, supplier } = product;
  
  return (
    <div className='min-h-screen bg-[#F7F4F2]'>
      <div className='lg:w-[65%] mx-auto grid lg:grid-cols-2 justify-items-center items-center gap-5'>
        <div className='bg-white w-[100%] h-[100%] flex justify-center p-8'>
          <img src={img} alt="product" />
        </div>
        <div className='bg-white w-[100%] h-[100%] p-8'>
          <h1 className='font-bold text-lg'>{name}</h1>
          <h4 className='font-bold text-lg'>Price: ${price}</h4>
          <p className='font-bold'>Product ID: {_id.split(':')[1]}</p>
          <p className='flex items-center font-bold'><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.5rem]'/> 1 review</p>
          <p className='font-bold'>Supplier: {supplier}</p>
          <p>Description: {description}</p>
          <div className='mt-5'>
          <p className='font-bold'>Quantity: <span className='px-5 py-[.4rem] border'>{quantity}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;