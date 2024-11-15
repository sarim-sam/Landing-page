import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 bg-[#684fff]">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Logo and description */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <div className="bg-white rounded-full p-3">
              <span className="text-black font-bold text-2xl">P</span>
            </div>
          </div>
          <p className='poppins-medium xl:text-lg text-white'>We use multi-mic and echo  </p>
          <p className='poppins-medium xl:text-lg text-white'>cancellation technology so that</p>
          <p className='poppins-medium xl:text-lg text-white'>everyone can use device.</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-14">
            <div className="w-14 h-14 flex items-center justify-center border-2  border-white rounded-full">
                <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300"><FaFacebookF  className="w-8 h-8 text-white" /></a>
            </div>
             <div className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full">
                <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300"><FaInstagram  className="w-8 h-8 text-white" /></a>
            </div>
            <div className="w-14 h-14 flex items-center justify-center border-2  border-white rounded-full">
                <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300"><FaTwitter    className="w-8 h-8 text-white" /></a>
            </div>
            <div className="w-14 h-14 flex items-center justify-center border-2  border-white rounded-full">
                <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300"><FaLinkedinIn className="w-8 h-8 text-white" /></a>
            </div>
        </div>
        </div>
        
        {/* Links Sections */}
        <div className="md:w-3/4 grid grid-cols-3 gap-8">
          
          {/* Resources */}
          <div>
            <p className="xl:text-xl md:text-md sm:text-sm poppins-semibold mb-9 text-white">Resources</p>
            <ul className="space-y-8">
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Features</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Pricing</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Login</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <p className="xl:text-xl md:text-md sm:text-sm poppins-semibold mb-9 text-white">Legal</p>
            <ul className="space-y-8">
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Terms of Use</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <p className="xl:text-xl md:text-md sm:text-sm poppins-semibold mb-9 text-white">Links</p>
            <ul className="space-y-8">
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Feedback</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyFooter;