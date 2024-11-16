import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 bg-[#684fff]">
      <div className="container mx-auto px-6">
        {/* Footer Content in Grid */}
        <div className="grid md:w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-16 md:mt-10 sm:mt-10">
          
           {/* Logo and Description */}
          <div className="lg:border-b-0 md:border-b-2 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 sm:border-white  sm:pb-4">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <div className="rounded-full p-3 mb-10 bg-white">
                <span className="font-bold 2xl:text-2xl xl:text-xl lg:text-2xl md:text-xl text-black">P</span>
              </div>
            </div>
            <p className="poppins-medium 2xl:text-16-1 xl:text-16-1 lg:text-16-1 md:text-16-1 sm:text16-1 xs:text16-1 ls:text16-1 ms:text16-1 sm:pb-4 text-white">We use multi-mic and echo cancellation technology so that everyone can use device.</p>
          </div>
          
          {/* Resources */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Resources</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Features</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Pricing</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Login</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Legal</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Terms of Use</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Links</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Feedback</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-4 mt-14 justify-center mb-4">
  <div className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:w-12 xs:h-12 ls:w-12 ls:h-12 ms:w-12 ms:h-12 flex items-center justify-center border-2 border-white rounded-full transform transition-transform duration-300 hover:scale-110 active:scale-95">
    <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
      <FaFacebookF className="2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-8 xs:h-8 ls:w-8 ls:h-8 ms:w-8 ms:h-8 text-white" />
    </a>
  </div>
  <div className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:w-12 xs:h-12 ls:w-12 ls:h-12 ms:w-12 ms:h-12 flex items-center justify-center border-2 border-white rounded-full transform transition-transform duration-300 hover:scale-110 active:scale-95">
    <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
      <FaInstagram className="2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-8 xs:h-8 ls:w-8 ls:h-8 ms:w-8 ms:h-8 text-white" />
    </a>
  </div>
  <div className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:w-12 xs:h-12 ls:w-12 ls:h-12 ms:w-12 ms:h-12 flex items-center justify-center border-2 border-white rounded-full transform transition-transform duration-300 hover:scale-110 active:scale-95">
    <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
      <FaTwitter className="2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-8 xs:h-8 ls:w-8 ls:h-8 ms:w-8 ms:h-8 text-white" />
    </a>
  </div>
  <div className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:w-12 xs:h-12 ls:w-12 ls:h-12 ms:w-12 ms:h-12 flex items-center justify-center border-2 border-white rounded-full transform transition-transform duration-300 hover:scale-110 active:scale-95">
    <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
      <FaLinkedinIn className="2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-8 xs:h-8 ls:w-8 ls:h-8 ms:w-8 ms:h-8 text-white" />
    </a>
  </div>
</div>
      </div>
    </div>
  );
};

export default MyFooter;
