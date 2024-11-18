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
              <div className="rounded-full p-3 mb-10">
              <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_40_1026)">
                  <path d="M80.5 21.1804C80.9306 33.457 72.6636 43.575 60.9952 44.7442C57.2061 45.104 53.2879 44.7892 48.4656 44.7892C53.3741 39.303 57.6798 34.3564 62.1146 29.4997C64.5689 26.7566 66.8509 24.0135 65.1717 19.9213C63.4925 15.9191 60.2201 15.4244 56.5172 15.5143C48.3794 15.6043 40.2847 15.3794 32.19 15.6492C30.7691 15.6492 28.8315 17.0433 28.1426 18.3474C26.4203 21.6301 25.2578 25.2277 23.6216 29.3198H56.0867C40.6292 46.9028 26.0759 63.4514 11.5226 80C11.2643 79.8201 20.866 57.1107 26.2051 45.2839H0.5C0.973628 43.4851 1.23197 42.226 1.61948 41.0118C5.96825 28.5554 10.4031 16.0989 14.5797 3.59753C15.5269 0.854413 16.7325 0 19.5312 0C32.7067 0.179876 45.8821 0 59.0576 0.0899382C70.683 0.224845 80.0694 9.57841 80.5 21.1804Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_40_1026">
                    <rect width="80" height="80" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
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