import React from 'react';
// import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <>
    <nav className='flex justify-between pr-40 py-5 text-white items-center'>
      <div className="name">
        <h1 className='text-xl'>Yunus Adebayo</h1>
      </div>
      <div className="links flex w-[200px] justify-between">
        <a href='#work'>Work</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </div>
    </nav>

    <h1 className='font-semibold text-5xl mt-40 w-[80%] leading-[60px]'>Frontend developer devoted to crafting beautiful web interface and user experiences focused on simplicity and purpose using modern technologies️.</h1>
    </>
    
  )
}

export default Top