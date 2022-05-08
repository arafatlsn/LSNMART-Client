import React from 'react';
import { FaRegCopyright, FaCcMastercard } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsGithub, BsPaypal } from 'react-icons/bs'
import { RiVisaFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='w-[100%] grid grid-cols-2 lg:grid-cols-3 lg:items-center justify-items-center py-[3rem] border mt-[4rem]'>
      <div className='order-1 lg:order-1'>
        <h6 className='flex items-center font-bold font-mono text-xl'><FaRegCopyright className='mr-[.5rem]'/> - 2022 LSNMART</h6>
      </div>
      <div className='order-3 lg:order-2'>
        <p className='font-bold font-mono'>Follow Us</p>
        <p className='flex gap-[1rem] text-xl mt-[.3rem]'>
          <a target={'blank'} href="https://www.facebook.com/arafat.hossan.lisan/"><BsFacebook/></a> 
          <a target={'blank'} href="https://www.instagram.com/arafatlsn/"><BsInstagram/></a>
          <a target={'blank'} href="https://github.com/arafatlsn"><BsGithub/></a>
        </p>
      </div>
      <div className='order-2 lg:order-3'>
      <p className='font-bold font-mono'>We Accept</p>
        <p className='flex gap-[1rem] text-xl mt-[.3rem]'>
          <RiVisaFill/>
          <FaCcMastercard/>
          <BsPaypal/>
        </p>
      </div>
    </div>
  );
};

export default Footer;