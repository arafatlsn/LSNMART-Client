import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';

const SignUp = () => {

  const { createUserWithEmailAndPassword, sendEmailVerification, errorCreateEmailPass } = useFirebase();
  const [user] = useAuthState(auth);

  const createUser = e => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPass?.value;
    if(password === confirmPassword){
      createUserWithEmailAndPassword(email, password);
      sendEmailVerification(email);
      toast('Your email verification Link sent your email')
    }
    else{
      alert('confirm pass not matched')
    }
  }

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  if(user){
    navigate(from, { replace: true })
  }

  return (
  <div className='lg:w-[45%] mx-auto lg:mt-[7.5rem] p-[3rem] bg-[#F7F4F2]'>
    <div className='flex flex-col'>
      <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>WelCome to LSNMART</h1>
    </div>
    <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>Create an account</h1>
    <div>
      <form onSubmit={createUser} className='flex flex-col gap-1'>
        <input type="email" name='email' placeholder='Email' className='border p-2 font-bold font-mono' />
        <input type="password" name='password' placeholder='Password' className='border p-2 font-bold' />
        <input type="password" name='confirmPass' placeholder='Confirm Password' className='border p-2 font-bold' />
        <div className='flex flex-col mt-[2rem] '>
          <p className='text-center text-[red]'>{errorCreateEmailPass && errorCreateEmailPass?.message}</p>
          <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto py-[.5rem] text-[#3A2A2F] cursor-pointer hover:bg-white' />
        </div>
      </form>
    </div>
    <Link to={'/signin'}><p className='text-[#0066F2] underline font-bold font-mono text-center mt-[1rem]'>Back to Signin</p></Link>
  </div>
  );
};

export default SignUp;