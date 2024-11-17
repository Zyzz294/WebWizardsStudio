import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
    place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            Our <br /> Tech <br /> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="html"  width={100} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="css" width={100} height={100} />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="java script" width={100} height={100} />
            <p className='mt-2'>JAVASCRIPT</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="react js" width={100} height={100} />
            <p className='mt-2'>React JS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="tailwind" width={100} height={100} />
            <p className='mt-2'>TAILWIND</p>
        </div>

    </div>
  )
}

export default Skills