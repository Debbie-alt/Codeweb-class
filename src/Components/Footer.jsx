import React from 'react';
import insta from '../assets/instaicon.png'
import x from '../assets/x.png'


const Footer = () => {
  return (
    <footer className="bg-green-800 mt-5 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-center md:text-left text-sm">
            <p>&copy; {new Date().getFullYear()} MovAtti</p>
          </div>
            <div className='flex'>
               <img src={insta} alt="" className='w-8' />
               <img src={x} alt="" className='w-8' />

            </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center text-sm md:justify-end space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
