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
    <div className="max-w-md p-8 rounded-lg shadow-lg bg-white relative">
      <div className="flex items-center gap-4 mb-4 relative">
        <div className="relative">
          <img src={image} alt={`${name}`} className="w-16 h-16 rounded-full" />
          <div className="absolute -top-14 -right-6 w-12 h-12 rounded-full flex items-center justify-center">
            <img src={icon} alt="icon" className="w-10 h-10" />
          </div>
        </div>
        <div>
          <p className="text-xl poppins-semibold text-black">{name}</p>
          <p className="text-base poppins-medium text-black">{title}</p>
        </div>
      </div>
      <p className="text-base text-gray-700 poppins-regular">{quote}</p>
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
      className="relative w-full min-h-[65vh] bg-[#FFFFFF] mx-auto overflow-hidden flex flex-col items-start justify-start px-4 py-8 sm:px-8 md:px-12 xs:px-6 ls:px-6 ms:px-6"
      style={{
        backgroundImage: "url('/public/myGroup.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="flex lg:flex-row md:flex-col sm:flex-col items-center justify-center w-full mx-2 sm:mx-4 mb-8">
      <p className="poppins-bold text-5xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-2xl text-center md:text-center lg:text-left mb-4 md:mb-6 sm:mb-8 lg:mb-0">
        What Our Client Said about us
      </p>
      <div className="flex gap-4 justify-center">
      <button
      onClick={handlePrev}
      className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-10 sm:h-10 rounded-full bg-[#f8f9ff] hover:bg-[#e0e4ff] flex items-center justify-center"
      >
        <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
      </button>
      <button
        onClick={handleNext}
        className="w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-10 sm:h-10 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center"
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
