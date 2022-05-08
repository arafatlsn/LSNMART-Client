import React from 'react';

const Blogs = () => {
  return (
    <div className='px-[.5rem] lg:w-[65%] lg:h-[78vh] mx-auto'>
      <div>
        <h1 className='text-2xl font-bold'>Q. Difference between javascript and nodejs?</h1>
        <mark>Ans.</mark>
        <p>JavaScript: JavaScript is a programming language. It running in any web browser with proper browser engine.</p>
        <p>Node JS: It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use saparately.</p>
      </div>
      <div className='mt-[1.5rem]'>
        <h1 className='text-2xl font-bold'>Q. Differences between sql and nosql databases?</h1>
        <mark>Ans.</mark>
        <p>SQL: </p>
        <p>Rational Database.</p>
        <p>Vertically Scalable.</p>
        <p>Table Based Database.</p>
        <p>Pre-Define Schema.</p>
        <p className='mt-[.5rem]'>NoSQL:</p>
        <p>Non-rational, Distributed Database.</p>
        <p>Horizontally Scalable.</p>
        <p>Document Based, Graph Based or Key-value Pair.</p>
        <p>Dynamics Schema.</p>
      </div>
      <div className='mt-[1.5rem]'>
        <h1 className='text-2xl font-bold'>Q. What is the purpose of jwt and how does it work?</h1>
        <mark>Ans.</mark>
        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
      </div>
    </div>
  );
};

export default Blogs;