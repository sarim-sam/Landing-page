// IMPORTS
import React from 'react';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify-icons/mdi/arrow-left';
import arrowRight from '@iconify-icons/mdi/arrow-right';
import { testimonials } from '../../data/data.js';


// FRONTEND
// TestimonialCard.
const TestimonialCard = ({ name, title, image, icon, quote }) => {
  return (
    <div className="max-w-sm p-5 rounded-lg shadow-md bg-white">
      <div className="text-center mb-4 text-3xl text-gray-300">
        <img src={icon} alt={`${name}`} className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <img src={image} alt={`${name}`} className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-lg poppins-semibold">{name}</p>
          <p className="text-sm text-gray-500 poppins-medium">{title}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 poppins-regular">{quote}</p>
    </div>
  );
};

// Testimonials.
export const Testimonials = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};


// MyTestimonials.
const MyTestimonials = () => {
  return (
    <div
      className="relative w-full min-h-[65vh] bg-[#FFFFFF] mx-auto overflow-hidden flex flex-col items-start justify-start px-4 py-8 sm:px-8 md:px-12"
      style={{
        backgroundImage: "url('/src/assets/myGroup.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center w-full mx-2 sm:mx-4 mb-8">
        <p className="text-2xl sm:text-3xl md:text-5xl poppins-bold mr-auto">
          What Our Client Said about us
        </p>
        <div className="flex gap-4">
          <button className="w-20 h-20 rounded-full bg-[#f8f9ff] flex items-center justify-center">
            <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
          </button>
          <button className="w-20 h-20 rounded-full bg-[#684fff] flex items-center justify-center">
            <Icon icon={arrowRight} width="40" height="40" className="text-[#ffffff]" />
          </button>
        </div>
      </div>

      {/* Render Testimonials component */}
      <Testimonials />
    </div>
  );
};

export default MyTestimonials;
