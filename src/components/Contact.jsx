import React from 'react';
import ReactGA from 'react-ga4'; // Import ReactGA for analytics

const Contact = () => {
  // Function to send analytics events
  const handleAnalytics = (action, label) => {
    ReactGA.event({
      category: 'Contact Section',
      action: action,
      label: label,
    });
  };

  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 
          className='text-4xl font-bold leading-tight primary-color'
          onClick={() => handleAnalytics('View', 'Contact Heading')}
        >
          Contact Us
        </h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#161616] rounded-xl'>
          <div className='p-10'>
            <form 
              action="https://getform.io/f/nbdoqdxa" 
              method='POST' 
              onSubmit={() => handleAnalytics('Submit', 'Contact Form')}
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                {/* Name Input */}
                <div>
                  <div className='mt-2.5 relative'>
                    <input 
                      type="text" 
                      name='name' 
                      placeholder='Your Name'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                      onFocus={() => handleAnalytics('Focus', 'Name Input')}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <div className='mt-2.5 relative'>
                    <input 
                      type="text" 
                      name='email' 
                      placeholder='Your Email'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                      onFocus={() => handleAnalytics('Focus', 'Email Input')}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className='sm:col-span-2'>
                  <div className='mt-2.5'>
                    <textarea 
                      name='message' 
                      placeholder='Your Message'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                      rows='4'
                      onFocus={() => handleAnalytics('Focus', 'Message Input')}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className='sm:col-span-2'>
                  <button 
                    type='submit' 
                    className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'
                    onClick={() => handleAnalytics('Click', 'Send Button')}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
