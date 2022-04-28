import React from 'react';

const Nav = () => {
  return (
    <div className='bg-[#3A2A2F] text-white py-4'>
      <div className='lg:w-[65%] mx-auto flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-bold'>LSNMART</h1>
        </div>
        <div className='flex'>
          <h3 className='mx-2 text-lg font-bold underline'>Home</h3>
          <h3 className='mx-2 text-lg font-bold underline'>Manage Items</h3>
          <h3 className='mx-2 text-lg font-bold underline'>Add Items</h3>
          <h3 className='mx-2 text-lg font-bold underline'>My Items</h3>
          <h3 className='mx-2 text-lg font-bold underline'>SignIn</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;