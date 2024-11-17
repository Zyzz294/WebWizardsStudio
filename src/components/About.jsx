import React from 'react'
import about from '../assets/about.gif'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Us Developers</h2>
                    <p className='text-base lg:text-lg'>We specialize in creating cutting-edge JavaScript React JS websites tailored to meet your unique needs. Our team of experienced developers utilizes a wide range of programming languages and advanced tools to deliver responsive, user-friendly, and visually appealing websites. Whether you’re looking for a sleek portfolio, a dynamic e-commerce platform, or an interactive web application, we’ve got you covered.</p>
                        <p className='text-base lg:text-lg'>In addition to React JS, we incorporate technologies like Node.js, Next.js, and TypeScript to ensure robust performance and scalability. Our expertise extends to integrating APIs, building secure authentication systems, and optimizing websites for SEO to boost your online presence.</p>
                        <p className='text-base lg:text-lg'>We pride ourselves on delivering quality solutions within your timeline and budget. Our team is committed to working closely with you throughout the development process to bring your vision to life. If you need any assistance or have questions about our services, don’t hesitate to reach out to us. Let us help you create a website that stands out and drives success!</p>
                </div>
            </div>
            <img src={about} alt="web application" className='mx-auto rounded-3xl py-8 md:py-0' width={500} height={500}/>
        </div> 
    </div>
  )
}

export default About