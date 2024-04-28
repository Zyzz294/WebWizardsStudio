import React from 'react'
import heroimage from '../assets/wizard.png'
import { TypeAnimation } from 'react-type-animation'
import { FaZ } from 'react-icons/fa6'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='my-auto mx-auto'>
                <img src={heroimage} alt="hero image" width={300} height={300} />
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    We're
                </span> <br/>
                <TypeAnimation
                    sequence={[
                        "FrontEnd Developers",
                        1000,
                        "WebDesigners",
                        1000,
                        "Consultants",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    We are WebWizards Studio
            </p>
            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download our Brochure
                </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl 
                border border-gray-400 hover:gradient-to-br from-orange-500 to-pink-500
                text-white hover:border-none
                '>
                    Contact Us
                </a>

            </div>
        </div>
    </div>
  )
}

export default Hero