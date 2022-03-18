import React from 'react';
import vid from '../assets/vid-1.mp4';
import vid2 from '../assets/vid-2.mp4';
import vid3 from '../assets/vid-3.mp4';
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Work = () => {
  return (
    <section className='projects-container pt-20' id='work'>
      <h1 className='text-7xl mb-40'>Recent work</h1>
      <div className="flex-vid mb-40">
          <div className="line w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex">
            <div className="my-vid bg-[#445AAB] w-[100%] px-16 py-9">
              <video autoPlay muted loop className=''>
                <source src={vid} />
              </video>
            </div>
            <div className="right-vid ml-16 w-[50%]">
                <a href="https://yunzestores.netlify.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='text-3xl font-medium'>Yunze Stores</h1>
                  <BsArrowUpRightCircle className='text-3xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi optio similique, vel minus hic.</p>
                <div className="tags mt-10 flex items-center">
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest'>REACT</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>TAILWIND</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>FIGMA</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-40">
          <div className="line w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex">
            <div className="my-vid bg-[#445AAB] w-[100%] px-16 py-9">
              <video autoPlay muted loop className=''>
                <source src={vid2} />
              </video>
            </div>
            <div className="right-vid ml-16 w-[50%]">
                <a href="https://yunzestores.netlify.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='text-3xl font-medium'>RPS GAME</h1>
                  <BsArrowUpRightCircle className='text-3xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi optio similique, vel minus hic.</p>
                <div className="tags mt-10 flex items-center">
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest'>HTML</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>CSS</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>JAVASCRIPT</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-40">
          <div className="line w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex">
            <div className="my-vid bg-[#445AAB] w-[100%] px-16 py-9">
              <video autoPlay muted loop className=''>
                <source src={vid3} />
              </video>
            </div>
            <div className="right-vid ml-16 w-[50%]">
                <a href="https://yunzestores.netlify.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='text-3xl font-medium'>RPS GAME</h1>
                  <BsArrowUpRightCircle className='text-3xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi optio similique, vel minus hic.</p>
                <div className="tags mt-10 flex items-center">
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest'>REACT</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>TAILWINDCSS</span>
                  <span className='text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest ml-3'>API</span>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Work