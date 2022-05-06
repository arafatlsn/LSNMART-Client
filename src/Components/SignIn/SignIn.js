import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import auth from '../../FireBase/Firebase.init';
import useFirebase from '../../FireBase/useFirebase';

const SignIn = () => {
  
  const { signInWithGoogle, signInWithEmailAndPassword } = useFirebase();

  const [user] = useAuthState(auth);
  console.log(user?.email)

  const userSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    const func = async() => {
      const url = `http://localhost:5000/signin?email=${email}`
      const { data } = await axios.get(url);
      localStorage.setItem('jwt-token', JSON.stringify(data))
    }
    func()
  }

  const func = async() => {
    const url = `http://localhost:5000/signin?email=${user?.email}`;
    const { data } = await axios.get(url);
    console.log(url)
    localStorage.setItem('jwt-token', JSON.stringify(data))
  }
  func()

  return (
    <div className='w-[45%] mx-auto mt-[7.5rem] p-[3rem] bg-[#F7F4F2]'>
      <div className='flex flex-col'>
        <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>WelCome to LSNMART</h1>
        <button onClick={() => signInWithGoogle()} className='flex justify-center items-center border p-2 text-xl font-bold font-mono hover:bg-white'><FcGoogle className='mr-2 text-2xl '/> Signin with Google</button>
      </div>
      <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>or your email password</h1>
      <div>
        <form onSubmit={userSignIn} className='flex flex-col gap-1'>
          <input type="email" name='email' placeholder='Email' className='border p-2 font-bold font-mono' />
          <input type="password" name='password' placeholder='Password' className='border p-2 font-bold' />
          <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto mt-[2rem] py-[.5rem] text-[#3A2A2F] cursor-pointer hover:bg-white' />
        </form>
      </div>
      <Link to={'/signup'} className='flex justify-center mt-[2.5rem] underline text-[#0066F2] font-bold font-mono'>Create an Account</Link>
    </div>
  );
};

export default SignIn;