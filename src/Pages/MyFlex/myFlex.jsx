// IMPORTS
import React from 'react';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify/icons-mdi/arrow-left';
import arrowRight from '@iconify/icons-mdi/arrow-right';


// FRONTEND
const MyFlex = () => {
  return (
    <div className="min-h-[576px] flex sxl:h-28 flex-col lg:flex-row md:flex-col 
sm:flex-col xs:flex-col ls:flex-col ms:flex-col items-center justify-around w-full mx-2 sm:mx-4 mb-8 z-10 2xl:-mx-16  bg-white">
  {/* Heading */}
  <p className="poppins-bold text-center sm:text-left w-full sm:w-auto 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl 
  sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl mb-4 sm:mb-0">
    What Our Client Said about us
  </p>


  {/* Navigation Buttons */}
  <div className="flex gap-4 sm:gap-6">
    {/* LEFT BUTTON */}
    <button className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 
    sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#F8F9FF] hover:bg-[#f4f4fa] flex items-center justify-center 
    transform transition-transform duration-300 hover:scale-110 mr-4">
      <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
    </button>

    {/* RIGHT BUTTON */}
    <button className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 
    sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center 
    transform transition-transform duration-300 hover:scale-110 mr-4">
      <Icon icon={arrowRight} width="40" height="40" className="text-[#ffffff]" />
    </button>
  </div>
</div>

  )
}

export default MyFlex;