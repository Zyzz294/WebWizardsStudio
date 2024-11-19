import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ReactGA from 'react-ga4'; // Import ReactGA for analytics

const Navbar = () => {
    const [nav, setNav] = useState(false);

    // Handle navigation toggle
    const handleNav = () => {
        setNav(!nav);
        ReactGA.event({
            category: 'Navbar',
            action: nav ? 'Close Menu' : 'Open Menu',
            label: 'Hamburger Menu',
        });
    };

    // Handle link clicks and send analytics
    const handleAnalytics = (section) => {
        ReactGA.event({
            category: 'Navbar',
            action: 'Navigate',
            label: section,
        });
    };

    return (
        <div className='bg-black text-gray-400 h-[100px] max-auto flex justify-between items-center'>
            {/* Logo */}
            <h1 
                className='text-3xl font-bold primary-color ml-4'
                onClick={() => handleAnalytics('Logo')}
            >
                WebWizards Studio
            </h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about" onClick={() => handleAnalytics('About')}>About</a></li>
                <li className='p-5'><a href="#work" onClick={() => handleAnalytics('Work')}>Work</a></li>
                <li className='p-5'><a href="#contact" onClick={() => handleAnalytics('Contact')}>Contact</a></li>
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation */}
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[50%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 
                    className='text-3xl font-bold primary-color ml-4'
                    onClick={() => handleAnalytics('Mobile Logo')}
                >
                    WebWizards Studio
                </h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-5'><a href="#home" onClick={() => handleAnalytics('Home')}>Home</a></li>
                    <li className='p-5'><a href="#about" onClick={() => handleAnalytics('About')}>About</a></li>
                    <li className='p-5'><a href="#work" onClick={() => handleAnalytics('Work')}>Work</a></li>
                    <li className='p-5'><a href="#experience" onClick={() => handleAnalytics('Experience')}>Experience</a></li>
                    <li className='p-5'><a href="#contact" onClick={() => handleAnalytics('Contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
