import React from 'react';
import Image  from '../assets/profile.png'

const ImageSection = () => {
  return (
    <>
      <section className='flex justify-between items-stretch mt-40'>
        <div className="right-cont self-end flex w-[50%]">
          <div className=' w-[50%]'>
            <div className='info'></div>
            <h3 className='font-extralight pt-8 text-[#D9D9D9]'>CONTACT</h3>
            <p>adeyunze05@gmail.com</p>
          </div>
          <div className='w-[50%] ml-5'>
            <div className="info"></div>
            <h3 className='font-extralight pt-8 text-[#D9D9D9]'>LOCATION</h3>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <div className='img-cont w-[500px] pl-5'>
          <img src={Image} alt="avatar" className='rounded w-full'/>
        </div>
      </section>
      <h1 className='font- text-3xl mt-40 leading-[40px]'>Having worked on websites and applications from ideation to launch, I have valuable experience working with modern technologies like JavaScript and it’s frameworks. I also have experience working with prototyping tools like Figma.</h1>
    </>
  )
}

export default ImageSection