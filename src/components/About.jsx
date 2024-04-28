import React from 'react'
import about from '../assets/about.gif'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Us</h2>
                    <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo provident exercitationem tempora rem, ad similique sapiente commodi fuga, dolor quo laudantium dicta! Architecto est fugiat neque ullam aut laudantium.</p>
                </div>
            </div>
            <img src={about} alt="aboutus" className='mx-auto rounded-3xl py-8 md:py-0' width={500} height={500}/>
        </div> 
    </div>
  )
}

export default About