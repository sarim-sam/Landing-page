// IMPORTS
import React, { useState } from 'react';
import { testimonials } from '../../data/data.js';


// FRONTEND
// TestimonialCard.
const TestimonialCard = ({ name, title, image, icon, quote }) => {
  return (
    <div className="max-w-md p-8 rounded-lg shadow-lg bg-white relative mt-14">
      <div className="flex items-center gap-4 mb-4 relative">
        <div className="relative">
          <img src={image} alt={`${name}`} className="w-16 h-16 rounded-full" />
          <div className="absolute -top-16 -right-8 w-16 h-16 rounded-full flex items-center justify-center">
            <img src={icon} alt="icon" className="w-14 h-14" />
          </div>
        </div>
        <div>
          <p className="text-28 poppins-semibold text-black">{name}</p>
          <p className="text-16-1 poppins-medium text-black">{title}</p>
        </div>
      </div>
      <p className="text-16-2 text-gray-700 poppins-regular">{quote}</p>
    </div>
  );
};

// Testimonials.
export const Testimonials = ({ startIndex, direction }) => {
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleTestimonials.map((testimonial, index) => (
        <div key={index} className={`testimonial-card ${direction}`}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
};

// MyTestimonials.
const MyTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setDirection('slide-next');
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection('slide-prev');
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div
      className="relative w-full min-h-[65vh] bg-[#FFFFFF] mx-auto overflow-hidden flex flex-col items-start justify-start px-4 py-8 sm:px-8 md:px-12 xs:px-12 ls:px-12 ms:px-12 mt-14"
      style={{
        backgroundImage: "url('/myGroup.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full mx-2 sm:mx-4 mb-8">
  {/* Heading */}
  <p className="poppins-bold lg:text-left text-center w-full 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl  ms:text-3xl  mb-4 md:mb-6 sm:mb-8 lg:mb-0">
    What Our Client Said about us
  </p>

  {/* Navigation Buttons */}
  <div className="flex gap-6 justify-center lg:justify-end lg:w-1/2 w-full">
  {/* LEFT BUTTON */}
    <button
      onClick={handlePrev}
      className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 rounded-full bg-[#f8f9ff] hover:bg-[#e0e4ff] flex items-center justify-center transform transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="85" height="85" rx="42.5" fill="#F8F9FF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M55.2498 42.5C55.2498 42.9062 55.0885 43.2956 54.8013 43.5828C54.5142 43.87 54.1247 44.0313 53.7186 44.0313H35.9775L42.5527 50.6034C42.6951 50.7458 42.808 50.9148 42.885 51.1008C42.9621 51.2868 43.0017 51.4862 43.0017 51.6875C43.0017 51.8889 42.9621 52.0883 42.885 52.2743C42.808 52.4603 42.6951 52.6293 42.5527 52.7717C42.4103 52.914 42.2413 53.027 42.0553 53.104C41.8693 53.1811 41.6699 53.2207 41.4686 53.2207C41.2672 53.2207 41.0678 53.1811 40.8818 53.104C40.6958 53.027 40.5268 52.914 40.3844 52.7717L31.1969 43.5842C31.0543 43.4419 30.9412 43.273 30.864 43.0869C30.7868 42.9009 30.7471 42.7015 30.7471 42.5C30.7471 42.2986 30.7868 42.0992 30.864 41.9132C30.9412 41.7271 31.0543 41.5582 31.1969 41.4159L40.3844 32.2284C40.672 31.9409 41.0619 31.7794 41.4686 31.7794C41.8752 31.7794 42.2652 31.9409 42.5527 32.2284C42.8402 32.5159 43.0017 32.9059 43.0017 33.3125C43.0017 33.7192 42.8402 34.1091 42.5527 34.3967L35.9775 40.9688H53.7186C54.1247 40.9688 54.5142 41.1301 54.8013 41.4173C55.0885 41.7045 55.2498 42.0939 55.2498 42.5Z" fill="#684FFF"/>
      </svg>
    </button>

  {/* RIGHT BUTTON */}
    <button
      onClick={handleNext}
      className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center transform transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0.5" width="84" height="84" rx="42" fill="#684FFF"/>
        <rect x="1" y="0.5" width="84" height="84" rx="42" stroke="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30.7502 42.5C30.7502 42.9062 30.9115 43.2956 31.1987 43.5828C31.4858 43.87 31.8753 44.0313 32.2814 44.0313H50.0225L43.4473 50.6034C43.3049 50.7458 43.192 50.9148 43.115 51.1008C43.0379 51.2868 42.9983 51.4862 42.9983 51.6875C42.9983 51.8889 43.0379 52.0883 43.115 52.2743C43.192 52.4603 43.3049 52.6293 43.4473 52.7717C43.5897 52.914 43.7587 53.027 43.9447 53.104C44.1307 53.1811 44.3301 53.2207 44.5314 53.2207C44.7328 53.2207 44.9322 53.1811 45.1182 53.104C45.3042 53.027 45.4732 52.914 45.6156 52.7717L54.8031 43.5842C54.9457 43.4419 55.0588 43.273 55.136 43.0869C55.2132 42.9009 55.2529 42.7015 55.2529 42.5C55.2529 42.2986 55.2132 42.0992 55.136 41.9132C55.0588 41.7271 54.9457 41.5582 54.8031 41.4159L45.6156 32.2284C45.328 31.9409 44.9381 31.7794 44.5314 31.7794C44.1248 31.7794 43.7348 31.9409 43.4473 32.2284C43.1598 32.5159 42.9983 32.9059 42.9983 33.3125C42.9983 33.7192 43.1598 34.1091 43.4473 34.3967L50.0225 40.9688H32.2814C31.8753 40.9688 31.4858 41.1301 31.1987 41.4173C30.9115 41.7045 30.7502 42.0939 30.7502 42.5Z" fill="white"/>
      </svg>
    </button>
  </div>
</div>

      {/* Testimonials */}
      <Testimonials startIndex={startIndex} direction={direction} />
    </div>
  );
};

export default MyTestimonials;
