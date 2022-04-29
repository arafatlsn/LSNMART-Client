import React from 'react';
import { TiInfoLarge } from 'react-icons/ti'

const Card = ({ elProd }) => {
  const {name, img, price, quantity, supplier} = elProd;
  console.log(elProd)
  return (
    <div className='w-[194px] h-[343px] border p-[1rem]'>
      <div className='h-[194px] flex items-center'>
        <img className='w-[194px] object-cover' src={img} alt="product" />
      </div>
      <div className='mt-3'>
        <p className='m-0'>{supplier}</p>
        <h1 title={name} className='whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h1>
        <div className='flex justify-between'>
        <h4 className='text-lg font-bold'>${price}</h4>
        <button className='border px-3 font-bold text-[#3A2A2F] hover:bg-[#3A2A2F] hover:text-white'>Update</button>
        </div>
        <p className='flex text-[#48b448] items-center m-0'><TiInfoLarge className='text-2xl'/> In Stock, <span className='font-bold mx-1'>{quantity}</span> units</p>
      </div>
    </div>
  );
};

export default Card;