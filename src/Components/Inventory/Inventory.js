import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsPlusLg } from 'react-icons/bs'

const Inventory = () => {
  const [product, setProduct] = useState([]);
  const [update, setUpdate] = useState(false);
  const {_id} = useParams();
  useEffect(() => {
    const func = async() => {
      const url = `http://localhost:5000/product?prod=${_id.split(':')[1]}`
    const { data } = await axios.get(url)
    setProduct(data);
    }
    func()
  }, [])

  const { img, name, description, price, quantity, supplier } = product;
  const [prodQuantity, setQuantity] = useState(0);
  const [addQuantity, setAddQuantity] = useState(0);

  const increaseQuantity = () => {
    const proceed = window.confirm('are sure?')
    if(prodQuantity && proceed){
      setQuantity( prodQuantity + Number(addQuantity));
      const func = async() => {
        const url = `http://localhost:5000/update?quantity=${prodQuantity + Number(addQuantity)}&&id=${_id.split(':')[1]}`
        const { data } = await axios.put(url);
      }
      func()
    }
    else if(proceed){
      setQuantity(quantity + Number(addQuantity));
      const func = async() => {
        const url = `http://localhost:5000/update?quantity=${quantity + Number(addQuantity)}&&id=${_id.split(':')[1]}`
        const { data } = await axios.put(url);
      }
      func()
    }
  }

  const reduceQuantity = () => {
    const proceed = window.confirm('are sure?')
    if(prodQuantity && proceed){
      setQuantity( prodQuantity - 1);
      const func = async() => {
        const url = `http://localhost:5000/update?quantity=${prodQuantity - 1}&&id=${_id.split(':')[1]}`
        const { data } = await axios.put(url);
      }
      func()
    }
    else if(proceed){
      setQuantity(quantity - 1);
      const func = async() => {
        const url = `http://localhost:5000/update?quantity=${quantity - 1}&&id=${_id.split(':')[1]}`
        const { data } = await axios.put(url);
      }
      func()
    }
  }
  
  return (
    <div className='min-h-screen bg-[#F7F4F2] p-[1rem]'>
      <div className='lg:w-[65%] mx-auto grid lg:grid-cols-2 justify-items-center items-center gap-[2rem]'>
        <div className='bg-white w-[100%] h-[100%] flex justify-center p-8 rounded-2xl'>
          <img className='w-[80%] object-contain' src={img} alt="product" />
        </div>
        <div className='bg-white w-[100%] h-[100%] p-8 rounded-2xl'>
          <h1 className='font-bold text-lg'>{name}</h1>
          <h4 className='font-bold text-lg'>Price: ${price}</h4>
          <p className='font-bold'>Product ID: {_id.split(':')[1]}</p>
          <p className='flex items-center font-bold'><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.1rem]'/><BsStarFill className='mr-[.5rem]'/> 1 review</p>
          <p className='font-bold'>Supplier: {supplier}</p>
          <p><span className='font-bold'>Description:</span> {description}</p>
          <div className='mt-5 flex items-center'>
          <p className='font-bold'>Stock: <span className='px-4 py-[.44rem] border ml-3'>{prodQuantity ? prodQuantity : quantity}</span></p>
          {
            update && <div className='flex'><p className='border px-3 py-[.57rem]'><BsPlusLg/></p>
            <input onBlur={(e) => setAddQuantity(e.target.value)} placeholder='00' className='border w-[3.4rem] px-3 py-[.35rem] font-bold font-mono focus:outline-none' type="text" name="" id="" />
            <button onClick={increaseQuantity} className='ml-5 px-5 font-bold font-mono text-[#3A2A2F] border rounded-lg hover:bg-[#F7F4F2]'>Confirm</button></div>
          }
          </div>
          <div className='mt-[3rem]'>
            <button onClick={() => setUpdate(true)} className='px-5 py-2 border w-[50%] font-bold font-mono text-[#3A2A2F] hover:bg-[#F7F4F2]'>Re-Stock</button>
            <button onClick={reduceQuantity} className='px-5 py-2 border w-[50%] font-bold font-mono text-[#3A2A2F] hover:bg-[#F7F4F2]'>Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;