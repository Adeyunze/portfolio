import { React, useRef, useEffect } from 'react';
import pics from '../assets/pics.png'
import { BsArrowUpRightCircle } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  const workref = useRef(null);

  useEffect(() => {
    gsap.fromTo(".line", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid',
      }
    }
    
    );

    gsap.fromTo(".line1", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid1',
      }
    }
    
    );

    gsap.fromTo(".line2", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid2',
      }
    }
    
    )

    gsap.fromTo(".line3", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid3',
      }
    }
    
    );

  gsap.fromTo(".line4", {
      width: 0,
    }, 
    {
      duration: 2,
      width: '100%',
      scrollTrigger: {
        trigger: '.my-vid4',
      }
    }
    
    )
  }, [])

  return (
    <section className='projects-container pt-20' id='work' ref={workref}>
      <h1 className='lg:text-7xl md:text-3xl text-2xl mb-20 lg:mb-40'>Recent work</h1>
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
            <div className="my-vid bg-[#445AAB] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
              <video autoPlay muted loop className=''>
                <source src={`https://i.imgur.com/eUvRabw.mp4`} />
              </video>
            </div>
            <div className="right-vid lg:ml-16 lg:w-[50%] mt-5">
                <a href="https://yunzestores.vercel.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='lg:text-3xl text-2xl font-medium'>Yunze Stores</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>This project was built using React and TailwindCSS, this project aimed to have a very good understanding of using React-Router and React Hooks</p>
                <div className="tags mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>REACT</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>TAILWIND</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>FIGMA</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line1 w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
            <div className="my-vid1 bg-[#445AAB] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
              <video autoPlay muted loop className=''>
                <source src={`https://i.imgur.com/d1Ehu3b.mp4`} />
              </video>
            </div>
            <div className="right-vid lg:ml-16 lg:w-[50%] mt-5">
                <a href="https://yunze-rps.netlify.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='lg:text-3xl text-2xl font-medium'>RPS GAME</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>This game was an "Advance" Challenge on front end mentor which entails using HTML, CSS, and JavaScript to build a rock paper scissors game</p>
                <div className="tags lg:mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>HTML</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>CSS</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>JAVASCRIPT</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line2 w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
            <div className="my-vid2 bg-[#445AAB] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
              <video autoPlay muted loop className=''>
                <source src={`https://i.imgur.com/ssTSfRc.mp4`} />
              </video>
            </div>
            <div className="right-vid lg:ml-16 lg:w-[50%] mt-5">
                <a href="https://yunze-countries-api.netlify.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='lg:text-3xl text-2xl font-medium'>COUNTRIES API</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>This project was built using TailwindCSS, React and React-Router for each contry page. The Aim of this project was to be able to understand how to work with API's.</p>
                <div className="tags mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>REACT</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>TAILWINDCSS</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>API</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line3 w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
            <div className="my-vid3 bg-[#445AAB] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
              <video autoPlay muted loop className=''>
                <source src={`https://i.imgur.com/KcfV0v1.mp4`} />
              </video>
            </div>
            <div className="right-vid lg:ml-16 lg:w-[50%] mt-5">
                <a href="https://e-commerce-product-henna.vercel.app/" target={`_blank`} className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='lg:text-3xl text-2xl font-medium'>Ecommerce product</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/>
                </a>
                <p className='mt-5 text-lg font-light'>This project was built with HTML, CSS and Vanila JavaScript. The Aim of this project was to be able to add items to cart and also delete items from the cart.</p>
                <div className="tags mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>HTML</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>CSS</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>JAVASCRIPT</span>
                </div>
            </div>
          </div>
      </div>
      <div className="flex-vid mb-32 lg:mb-40">
          <div className="line4 w-full h-[1px] bg-white mb-14"></div>
          <div className="vid-cont flex lg:flex-row flex-col">
            <div className="my-vid4 bg-[#445AAB] w-[100%] px-5 lg:px-16 py-4 lg:py-9">
              <img src={pics} alt="my pic" />
            </div>
            <div className="right-vid lg:ml-16 lg:w-[70%] mt-5">
                <div className='flex items-center hover:text-[#7794FF] ease-in duration-300'>
                  <h1 className='lg:text-3xl text-2xl font-medium'>Sematec</h1>
                  <BsArrowUpRightCircle className='lg:text-3xl text-2xl ml-5'/>
                </div>
                <p className='mt-5 text-lg font-light'>This project was a freelance project which entails building the company website from scratch using Bootstrap.</p>
                <div className="tags mt-10 flex items-center flex-wrap mt-[-2px] mr-[-3px]">
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px]'>HTML</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>BOOTSTRAP</span>
                  <span className='text-base text-slate-300 px-7 py-2 border rounded-full text-sm tracking-widest mt-[15px] lg:mr-[3px] mr-[15px] lg:ml-3'>JAVASCRIPT</span>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Work
