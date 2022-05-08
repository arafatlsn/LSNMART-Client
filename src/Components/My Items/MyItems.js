import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';
import ProdTable from '../../ProdTable/ProdTable';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const { userSignOut } = useFirebase();

  useEffect(() => {
    const func = async() => {
      const url = `https://cryptic-everglades-57877.herokuapp.com/myitems?email=${user.email}`;
      try{
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt-token')}`
          }
        });
        setProducts(data)
      }
      catch(error){
        const status = error.response.status;
        if(status == 403 || status == 401){
          // console.log('hello world')
          userSignOut()
        }
      }
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
    products.length ? <div className='lg:w-[65%] h-[78vh] mx-auto overflow-x-auto'>
    <ProdTable products={products} removeItem={removeItem}></ProdTable>
  </div> : <div className='h-[78vh] flex items-center justify-center'><p className='text-5xl font-mono font-bold'>You Added 0 item</p></div>
  );
};

export default MyItems;