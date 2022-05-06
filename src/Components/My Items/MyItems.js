import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FireBase/Firebase.init';
import ProdTable from '../../ProdTable/ProdTable'

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const func = async() => {
      const url = `http://localhost:5000/myitems?email=${user.email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt-token')}`
        }
      });
      console.log(data)
      setProducts(data)
    }
    func()
  }, [])
  const removeItem = async(item) => {
    const proceed = window.confirm('are you sure?');
    if(proceed){
      const url = `http://localhost:5000/remove?rmitem=${item}`
      const { data } = await axios.get(url);
      if(data.deletedCount){
        const rmFilter = products.filter(el => el._id !== item);
        setProducts(rmFilter)
    }
    }
  }
  return (
    products.length && <div className='w-[65%] mx-auto'>
    <ProdTable products={products} removeItem={removeItem}></ProdTable>
  </div>
  );
};

export default MyItems;