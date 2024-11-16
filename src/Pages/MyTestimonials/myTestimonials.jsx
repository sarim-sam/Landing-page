// IMPORTS
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify-icons/mdi/arrow-left';
import arrowRight from '@iconify-icons/mdi/arrow-right';
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
  <p className="poppins-bold lg:text-left text-center lg:w-1/2 w-full 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl  ms:text-3xl  mb-4 md:mb-6 sm:mb-8 lg:mb-0">
    What Our Client Said about us
  </p>

  {/* Navigation Buttons */}
  <div className="flex gap-6 justify-center lg:justify-end lg:w-1/2 w-full">
    <button
      onClick={handlePrev}
      className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 rounded-full bg-[#f8f9ff] hover:bg-[#e0e4ff] flex items-center justify-center"
    >
      <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
    </button>
    <button
      onClick={handleNext}
      className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center"
    >
      <Icon icon={arrowRight} width="40" height="40" className="text-[#ffffff]" />
    </button>
  </div>
</div>

      {/* Testimonials */}
      <Testimonials startIndex={startIndex} direction={direction} />
    </div>
  );
};

export default MyTestimonials;
