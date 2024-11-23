// IMPORTS
import React, { useState, useEffect } from 'react';
import { testimonials } from '../../data/data';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify/icons-mdi/arrow-left';
import arrowRight from '@iconify/icons-mdi/arrow-right';


// Frontend
const TestimonialCard = ({ name, title, image, white, black, quote1, quote2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group max-w-md p-8 m-6 rounded-[30px] shadow-lg bg-white relative transform transition-transform duration-300 hover:scale-105 hover:bg-[#684fff] hover:text-[#f9fafb] active:scale-110 will-change-transform"
       onMouseEnter={() => setIsHovered(true)} 
       onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center gap-4 mb-4 relative">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={image}
            alt={`${name}`}
            className="w-16 h-16 rounded-full shadow-[0_0_0_2px_#f8f9ff] transition-shadow duration-600 group-hover:shadow-[0_0_0_2px_white]"
          />
          {/* Icon Image */}
          <div className="absolute -top-14 left-3 w-28 h-28 flex items-center justify-center rounded-full transition-transform duration-300">
          {isHovered ? (
              <svg width="136" height="156" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_522_2806)">
              <path d="M56.16 35.624C52.352 35.624 49.048 38.256 49.048 43.856C49.048 51.864 55.6 56.568 59.24 57.016L60.08 54.832C57.952 53.432 56.16 51.024 56.328 49.624C58.736 49.456 62.656 48.112 62.656 42.904C62.712 38.928 60.472 35.624 56.16 35.624ZM72.4 35.624C68.592 35.624 65.288 38.256 65.288 43.856C65.288 51.864 71.84 56.568 75.48 57.016L76.32 54.832C74.192 53.432 72.4 51.024 72.568 49.624C74.976 49.456 78.896 48.112 78.896 42.904C78.952 38.928 76.712 35.624 72.4 35.624ZM43.56 62L54.088 68.44C50 70.736 43 74.264 36 76L43.56 62ZM64 20C79.176 20 92 31.648 92 45.648C92 60.824 79.176 71.296 64 71.296C48.824 71.296 36 60.824 36 45.648C36 31.648 48.824 20 64 20Z" fill="#F9FAFB"/>
              </g>
              <defs>
              <filter id="filter0_d_522_2806" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="4" dy="20"/>
              <feGaussianBlur stdDeviation="20"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_522_2806"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_522_2806" result="shape"/>
              </filter>
              </defs>
              </svg>
            ) : (
              <img src={white} alt="Default Icon" className="absolute w-12 h-12 top-[1px]"/>
            )}
        </div>
        </div>
        {/* Name and Title */}
        <div>
          <p className="text-28 md:text-28md sm:text-28sm xs:text-28sm ls:text-28sm ms:text-28sm poppins-semibold mb-2 transition-colors duration-600 group-hover:text-[#f9fafb]">
            {name}
          </p>
          <p className="text-16-1 poppins-medium transition-colors duration-600 group-hover:text-[#f9fafb]">
            {title}
          </p>
        </div>
      </div>
      {/* Quote */}
      <p className="text-16-2 text-gray-700 poppins-regular transition-colors duration-600 group-hover:text-[#f9fafb]">
        {quote1}
      </p>
      <p className="text-16-2 text-gray-700 poppins-regular transition-colors duration-600 group-hover:text-[#f9fafb]">
        {quote2}
      </p>
    </div>
  );
};


export const Testimonials = ({ getVisibleCards, direction, focusedIndex, animateFocus }) => {
  const visibleTestimonials = getVisibleCards();

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleTestimonials.map((testimonial, index) => {
        const isFocused = index === focusedIndex && animateFocus;
        return (
          <div
            key={index}
            className={`testimonial-card ${direction} ${
              isFocused ? 'focus-center' : ''
            }`}
            style={{
              animation: `${direction === 'slide-next' ? 'slideLeft' : 'slideRight'} 0.6s ease-in-out`,
            }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        );
      })}
    </div>
  );
};

// MyTestimonials.
const MyTestimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [key, setKey] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [animateFocus, setAnimateFocus] = useState(false);

  const totalCards = testimonials.length;
  const [visibleCards, setVisibleCards] = useState(3);


useEffect(() => {
  const updateVisibleCards = () => {
    if (window.innerWidth < 768) {
      setVisibleCards(1); 
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2); 
    } else {
      setVisibleCards(3); 
    }
  };

  updateVisibleCards(); 
  window.addEventListener('resize', updateVisibleCards); 

  return () => window.removeEventListener('resize', updateVisibleCards);
}, []);

  const handleNext = () => {
    setDirection('slide-next');
    setKey((prevKey) => prevKey + 1);
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setDirection('slide-prev');
    setKey((prevKey) => prevKey - 1);
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };


  const getVisibleCards = () => {
    return testimonials.slice(startIndex, startIndex + visibleCards);
  };


  return (
    <div className="relative w-full min-h-[637px] bg-[#FFFFFF] overflow-hidden flex flex-col items-start justify-start mt-14">
      <img
        src="/myGroup.png"
        alt="Background"
        className="absolute inset-0 left-5 z-0 max-w-full max-h-[580px] hidden sm:hidden md:block"
      />

      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
        <img
          src="/decorator-first.png"
          className="absolute left-1/2 transform -translate-x-1/2"
        />
        <img
          src="/decorator-second.png"
          className="absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2"
        />
      </div>

      <div className="flex sxl:h-28 flex-col lg:flex-row md:flex-col sm:flex-col xs:flex-col ls:flex-col ms:flex-col items-center justify-around w-full mx-2 sm:mx-4 mb-8 z-10 2xl:-mx-16">
        {/* Heading */}
        <p className="poppins-bold text-center sm:text-left w-full sm:w-auto 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl mb-4 sm:mb-0">
          What Our Client Said about us
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 sm:gap-6">
          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#F8F9FF] hover:bg-[#f4f4fa] flex items-center justify-center transform transition-transform duration-300 hover:scale-110 mr-4"
          >
            <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center transform transition-transform duration-300 hover:scale-110 mr-4"
          >
            <Icon icon={arrowRight} width="40" height="40" className="text-[#ffffff]" />
          </button>
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials
        startIndex={startIndex}
        direction={direction}
        key={key}
        focusedIndex={focusedIndex}
        animateFocus={animateFocus}
        getVisibleCards={getVisibleCards}
      />

     
      </div>
  );
};

export default MyTestimonial;