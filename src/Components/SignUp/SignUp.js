import React from 'react';
import useFirebase from '../../FireBase/useFirebase';

const SignUp = () => {
  const { createUserWithEmailAndPassword } = useFirebase();

  const createUser = e => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPass?.value;
    if(password === confirmPassword){
      createUserWithEmailAndPassword(email, password)
    }
    else{
      alert('confirm pass not matched')
    }
  }
  return (
  <div className='w-[45%] mx-auto mt-[7.5rem] p-[3rem] bg-[#F7F4F2]'>
    <div className='flex flex-col'>
      <h1 className='text-center mb-[1rem] text-4xl font-bold font-mono'>WelCome to LSNMART</h1>
    </div>
    <h1 className='text-center mt-[3rem] mb-[1rem] text-lg font-bold font-mono text-[dimgray]'>Create an account</h1>
    <div>
      <form onSubmit={createUser} className='flex flex-col gap-1'>
        <input type="email" name='email' placeholder='Email' className='border p-2 font-bold font-mono' />
        <input type="password" name='password' placeholder='Password' className='border p-2 font-bold' />
        <input type="password" name='confirmPass' placeholder='Confirm Password' className='border p-2 font-bold' />
        <input type="submit" value="Submit" className='border text-xl font-bold font-mono rounded-xl w-[35%] mx-auto mt-[2rem] py-[.5rem] text-[#3A2A2F] cursor-pointer hover:bg-white' />
      </form>
    </div>
  </div>
  );
};

export default SignUp;