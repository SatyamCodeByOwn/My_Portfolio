import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
            <div className='flex justify-between flex-wrap gap-4'>
                <p className='text-white text-center w-full sm:w-auto font-light'>© {year} Satyam. All rights reserved.</p>
                <div className='text-white flex justify-around sm:w-[250px] w-full'>
                    <a 
                        href="mailto:www.satyamsingh45012@gmail.com" 
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="Send Email"
                    >
                        <FiMail className='text-xl' />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/satyam-singh-54b96a244/" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="LinkedIn Profile"
                    >
                        <AiFillLinkedin className='text-xl' />
                    </a>
                    <a 
                        href="https://github.com/SatyamCodeByOwn" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="GitHub Profile"
                    >
                        <FaGithub className='text-xl' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
