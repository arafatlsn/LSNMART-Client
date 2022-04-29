import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';

const Nav = () => {
  const [user] = useAuthState(auth)
  const { userSignOut } = useFirebase();
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
          {
            !user ? <Link to={'/signin'} className='lg:absolute top-3 right-5 mx-2 text-lg font-bold bg-white hover:bg-[#F7F4F2] text-[#3A2A2F] px-6 py-1 rounded-lg'>Sign in</Link> : <Link onClick={userSignOut} to={'/signin'} className='lg:absolute top-3 right-5 mx-2 text-lg font-bold bg-white hover:bg-[#F7F4F2] text-[#3A2A2F] px-6 py-1 rounded-lg'>Sign out</Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;