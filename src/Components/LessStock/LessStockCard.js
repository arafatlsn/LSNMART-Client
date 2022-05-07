import React from 'react';

const LessStockCard = ({ elProd, children }) => {
  const { img, name, quantity, supplier } = elProd;
  console.log(children)
  return (
    <div className='flex border px-2 py-1'>
      <div>
        <img className='w-[70px] h-[70px] object-contain' src={img} alt="" />
      </div>
      <div className='ml-2'>
        <h3>{supplier}</h3>
        <h1 className='whitespace-nowrap'>{name.length > 25 ? name.slice(0, 25) + '...' : name}</h1>
        <p>{children ? 
        <>
          <p>Date: {children.split(',')[0]}</p>
          <p>Time: {children.split(',')[1]}</p>
        </> : <>Stock: {quantity}</>}</p>
      </div>
    </div>
  );
};

export default LessStockCard;