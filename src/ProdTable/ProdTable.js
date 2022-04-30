import React from 'react';

const ProdTable = ({ products }) => {
  console.log(products)
  return (
    <table className='w-[100%]'>
      <thead>
        <tr className='grid grid-cols-4 justify-items-center bg-[#F7F4F2] py-[1rem]'>
          <th className='text-xl font-mono'>Product</th>
          <th className='text-xl font-mono'>Quantity</th>
          <th className='text-xl font-mono'>Price</th>
          <th className='text-xl font-mono'>Update</th>
        </tr> 
      </thead>
      <tbody className=''>
      {
        products.map(elProd => {
          return <tr className='grid grid-cols-4 justify-items-center items-center border py-[.8rem] px-[.5rem]'>
            <td>
              <div className='flex items-center'>
                <div className='mr-3'>
                  <img className='w-[50px]' src={elProd.img} alt="" />
                </div>
                <div>
                <h1 className='m-0'>{elProd.name.length > 25 && elProd.name.slice(0, 25)}</h1>
                <p className='m-0'>{elProd._id}</p>
                </div>
              </div>
            </td>
            <td>
              {elProd.quantity}
            </td>
            <td>
              ${elProd.price}
            </td>
          </tr>
        })
      }
      </tbody>
    </table>
  );
};

export default ProdTable;