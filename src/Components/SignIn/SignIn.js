import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'

const SignIn = () => {
  return (
    <div className='w-[45%] mx-auto mt-[7.5rem]'>
      <div className='flex flex-col'>
        <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>WelCome to LSNMART</h1>
        <button className='flex justify-center items-center border p-2 text-xl font-bold font-mono'><FcGoogle className='mr-2 text-2xl'/> Signin with Google</button>
      </div>
      <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>or your email password</h1>
      <div>
        <form className='flex flex-col gap-1'>
          <input type="email" name='email' placeholder='Email' className='border p-2 font-bold font-mono' />
          <input type="password" name='password' placeholder='Password' className='border p-2 font-bold' />
          <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto mt-[2rem] py-[.5rem] text-[#3A2A2F] cursor-pointer' />
        </form>
      </div>
    </div>
  );
};

export default SignIn;