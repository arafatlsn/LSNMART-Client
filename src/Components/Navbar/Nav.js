import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='bg-[#3A2A2F] text-white py-4'>
      <div className='lg:w-[65%] mx-auto flex justify-between items-center'>
        <div>
          <Link to={'/'} className='text-2xl font-bold'>LSNMART</Link>
        </div>
        <div className='flex'>
          <h3 className='mx-2 text-lg font-bold underline'>Home</h3>
          <h3 className='mx-2 text-lg font-bold underline'>Manage Items</h3>
          <h3 className='mx-2 text-lg font-bold underline'>Add Items</h3>
          <h3 className='mx-2 text-lg font-bold underline'>My Items</h3>
          <Link to={'/signin'} className='mx-2 text-lg font-bold underline'>SignIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;