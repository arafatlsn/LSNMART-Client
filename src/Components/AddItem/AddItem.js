import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FireBase/Firebase.init'

const AddItem = () => {

  const [user] = useAuthState(auth);

  const createItem = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const itemObj = {name, img, price, quantity, supplier, email, description};
    const func = async() => {
      const { data } = await axios.post('http://localhost:5000/additem', itemObj)
    }
    func()
    e.target.reset()
 
  }

  return (
    <div className='w-[45%] mx-auto mt-[4rem] p-[3rem] bg-[#F7F4F2]'>
      <div className='flex flex-col'>
        <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>Add new Item</h1>
      </div>
      <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>Drop all info about your Product</h1>
      <div>
        <form onSubmit={createItem} className='flex flex-col gap-1'>
          <input type="text" name='name' placeholder='Product Name' className='border p-2 font-bold font-mono' required/>
          <input type="text" name='img' placeholder='Product Image' className='border p-2 font-bold' required/>
          <input type="text" name='price' placeholder='Product Price' className='border p-2 font-bold' required/>
          <input type="number" name='quantity' placeholder='Product Quantity' className='border p-2 font-bold' required/>
          <input type="text" name='supplier' placeholder='Supplier Name' className='border p-2 font-bold' required/>
          <input value={user.email} type="email" name='email' placeholder='Your Email' className='border p-2 font-bold' required readOnly/>
          <textarea name='description' placeholder='Product Description' className='border p-2 font-bold' required/>
          <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto mt-[2rem] py-[.5rem] text-[#3A2A2F] cursor-pointer' />
        </form>
      </div>
    </div>
  );
};

export default AddItem;