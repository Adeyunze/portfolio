import React from 'react';
// import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <>
    <nav className='flex justify-between md:pr-40 py-5 text-white items-center'>
      <div className="name">
        <h1 className='md:text-xl'>Yunus Adebayo</h1>
      </div>
      <div className="links flex justify-between">
        <a href='#work' className='md:pl-10 pl-5'>Work</a>
        {/* <a href='/'>About</a> */}
        <a href='#contact' className='md:pl-10 pl-5'>Contact</a>
      </div>
    </nav>

    <h1 className='md:font- md:text-5xl text-2xl md:mt-40 mt-20 md:w-[80%] md:leading-[60px] header-h1'>Frontend developer devoted to crafting beautiful web interface and user experiences focused on simplicity and purpose using modern technologies.</h1>
    </>
    
  )
}

export default Top