import React from 'react';

const About = () => {
  return (
    <div className='lg:w-[65%] lg:h-[78vh] mx-auto px-[.5rem] lg:flex mt-5'>
      <div>
        <div className='about-img-container'>
          <img className='w-[8rem]' src={'me.jpg'} alt="" />
        </div>
        <div>
          <h3 className='text-xl font-bold'>I'm Arafat Hossan Lisan</h3>
          <h5>Contact</h5>
          <h6>Address:</h6>
          <p className='m-0'>Chandpur, Bangladesh</p>
          <p className='m-0'>Phone: 01903508765</p>
          <p className='m-0'>Email: arafat.lisan.25@gmail.com</p>
          <h5>Language</h5>
          <p className='m-0'>Bengali</p>
          <p className='m-0'>English</p>
        </div>
      </div>
      <div>
        <h5>Summary</h5>
        <p>
          Junior Web Developer in front end development. Dynamic web projects. well-versed in numerous programming languages includes HTML, CSS, JAVASCRIPT. and I also know Bootstrap, Tailwind, React. Strong backgound in project management and customer relations.
        </p>
        <h5>Skill Highlight</h5>
        <p className='m-0'>HTML</p>
        <p className='m-0'>CSS</p>
        <p className='m-0'>BOOTSTRAP</p>
        <p className='m-0'>TAILWIND</p>
        <p className='m-0'>JAVASCRIPT</p>
        <p className='m-0'>REACT</p>
        <h5>Education</h5>
        <p>Bachelor of Science: Mathematics, Chandpur Govt. College</p>
      </div>
    </div>
  );
};

export default About;