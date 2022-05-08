import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';

const SignIn = () => {
  
  const { signInWithGoogle, signInWithEmailAndPassword, sendPasswordResetEmail, errorSignInWithEmailAndPassword } = useFirebase();

  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('')

  const userSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    const func = async() => {
      const url = `https://cryptic-everglades-57877.herokuapp.com/signin?email=${email}`
      const { data } = await axios.get(url);
      localStorage.setItem('jwt-token', JSON.stringify(data))
    }
    func()
  }

  const func = async() => {
    const url = `https://cryptic-everglades-57877.herokuapp.com/signin?email=${user?.email}`;
    const { data } = await axios.get(url);
    localStorage.setItem('jwt-token', JSON.stringify(data))
  }
  func()

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  if(user){
    navigate(from, { replace: true });
  }

  return (
    <div className='lg:w-[45%] lg:h-[78vh] mx-auto lg:mt-[7.5rem] p-[3rem] bg-[#F7F4F2]'>
      <div className='flex flex-col'>
        <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>WelCome to LSNMART</h1>
        <button onClick={() => signInWithGoogle()} className='flex justify-center items-center border p-2 text-xl font-bold font-mono hover:bg-white'><FcGoogle className='mr-2 text-2xl '/> Signin with Google</button>
      </div>
      <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>or your email password</h1>
      <div>
        <form onSubmit={userSignIn} className='flex flex-col gap-1'>
          <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Email' className='border p-2 font-bold font-mono' />
          <input type="password" name='password' placeholder='Password' className='border p-2 font-bold' />
          <p className='font-mono text-[dimgray]'>Forget Password? <span onClick={async() => {
            await sendPasswordResetEmail(email);
            toast('Password Reset link sent your email.')
          }} className='font-bold underline text-[#0066F2] cursor-pointer'>Reset</span></p>
          <div className='mt-[2rem] flex flex-col align-center'>
            <p className='text-center text-[red]'>{errorSignInWithEmailAndPassword && errorSignInWithEmailAndPassword?.message}</p>
            <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto py-[.5rem] text-[#3A2A2F] cursor-pointer hover:bg-white' />
          </div>
        </form>
      </div>
      <Link to={'/signup'} className='flex justify-center mt-[2.5rem] underline text-[#0066F2] font-bold font-mono'>Create an Account</Link>
    </div>
  );
};

export default SignIn;