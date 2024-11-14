import React from 'react';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify-icons/mdi/arrow-left';
import arrowRight from '@iconify-icons/mdi/arrow-right';

const MyTestimonials = () => {
  return (
    <div
      className="relative w-full min-h-[65vh] bg-[#FFFFFF] mx-auto overflow-hidden flex items-start justify-start px-4 mt-8 sm:px-8 md:px-12"
      style={{
        backgroundImage: "url('/src/assets/myGroup.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center w-full mx-2 sm:mx-4">
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold mr-auto">
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
    </div>
  );
};

export default MyTestimonials;
