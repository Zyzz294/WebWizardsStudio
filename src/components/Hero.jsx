import React from 'react';
import heroimage from '../assets/wizard.png';
import { TypeAnimation } from 'react-type-animation';
import ReactGA from 'react-ga4'; // Import ReactGA for analytics

const Hero = () => {
  // Function to send analytics events
  const handleAnalytics = (action, label) => {
    ReactGA.event({
      category: 'Hero Section',
      action: action,
      label: label,
    });
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      
      {/* Hero Image */}
      <div className='my-auto mx-auto'>
        <img
          src={heroimage}
          alt="hero image"
          width={300}
          height={300}
          onClick={() => handleAnalytics('Click', 'Hero Image')}
        />
      </div>

      {/* Hero Text and Buttons */}
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>We're</span> <br />
          <TypeAnimation
            sequence={[
              "FrontEnd Developers",
              1000,
              "React JS Developers",
              1000,
              "Java Script Developers",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            onStart={() => handleAnalytics('Animation Start', 'TypeAnimation')}
            onLoopComplete={() => handleAnalytics('Animation Loop Complete', 'TypeAnimation')}
          />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          We are WebWizards Studio
        </p>
        <div className='my-8'>
          <a
            href="/"
            className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'
            onClick={() => handleAnalytics('Click', 'Download Brochure')}
          >
            Download our Brochure
          </a>
          <a
            href="#contact"
            className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'
            onClick={() => handleAnalytics('Click', 'Contact Us')}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
