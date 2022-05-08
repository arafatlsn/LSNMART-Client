import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';
import { BsGridFill } from 'react-icons/bs'

const Nav = () => {
  const [user] = useAuthState(auth)
  const { userSignOut } = useFirebase();
  const [display, setDisplay] = useState(false);
  return (
    <div className='bg-[#3A2A2F] text-white py-4 px-[.5rem]'>
      <div className='lg:w-[65%] mx-auto lg:flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          <Link to={'/'} className='text-2xl font-bold'>LSNMART</Link>
          <div>
            <BsGridFill onClick={() => setDisplay(!display)} className='text-3xl block lg:hidden cursor-pointer'/>
          </div>
        </div>
        <div className={` ${display ? 'bolck' : 'hidden'} lg:flex none`}>
          <Link to={'/'} className='mx-2 text-lg font-bold underline block'>Home</Link>
          <Link to={'/manageinventory'} className='mx-2 text-lg font-bold underline block'>Manage Inventory</Link>
          <Link to={'/additem'} className='mx-2 text-lg font-bold underline block'>Add Items</Link>
          <Link to={'/myitems'} className='mx-2 text-lg font-bold underline block'>My Items</Link>
          <Link to={'/blogs'} className='mx-2 text-lg font-bold underline block'>Blogs</Link>
          <Link to={'/about'} className='mx-2 text-lg font-bold underline block'>About</Link>
          {
            !user ? <Link to={'/signin'} className='lg:absolute top-3 right-5 mx-2 text-lg font-bold bg-white hover:bg-[#F7F4F2] text-[#3A2A2F] px-6 py-1 rounded-lg inline-block my-1'>Sign in</Link> : <Link onClick={userSignOut} to={'/signin'} className='lg:absolute top-3 right-5 mx-2 text-lg font-bold bg-white hover:bg-[#F7F4F2] text-[#3A2A2F] px-6 py-1 rounded-lg inline-block my-1'>Sign out</Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;