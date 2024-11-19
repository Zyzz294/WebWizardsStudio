import React from 'react';
import ReactGA from 'react-ga4'; // Import ReactGA for analytics
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

const Work = () => {

  // Function to handle clicks and send analytics
  const handleAnalytics = (action, label) => {
    ReactGA.event({
      category: 'Work Section',
      action: action,
      label: label,
    });
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p 
          className='text-4xl mb-3 font-bold primary-color' 
          onClick={() => handleAnalytics('View', 'Work Section')}
        >
          Work
        </p>
        <h3 className='text-gray-400'>
          Check Out Some of Our Recent Works
        </h3>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Projects */}
        {[proj1, proj2, proj3, proj4, proj5, proj6].map((project, index) => (
          <div 
            key={index}
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto contet-div h-[200px] bg-cover relative'
            onClick={() => handleAnalytics('Click', `Project ${index + 1}`)}
          >
            <img src={project} alt={`Project ${index + 1}`} objectFit='cover' layout='fill' />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React/JS Project
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Zyzz294">
                  <button 
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent div click event
                      handleAnalytics('Click', `Live Button Project ${index + 1}`);
                    }}
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
