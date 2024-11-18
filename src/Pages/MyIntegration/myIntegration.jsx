import React from 'react';


const MyIntegration = () => {
  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden bg-[#4F46E5] flex items-center justify-center mb-12">
      {/* Background GIF */}
      <img 
        src="/myGif.gif" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Animation"
      />

      {/* Background Image */}
      <img 
        src="/columnss.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Overlay"
      />

      {/* Centered Frame and Text Container */}
      <div className="relative flex flex-col items-center justify-center text-white space-y-8 md:flex-col lg:flex-row lg:space-y-0 lg:space-x-8">
        {/* Frame Image */}
        <img 
          src="/frame.png" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
          alt="Frame"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center text-center md:items-center lg:items-start lg:text-left max-w-xl">
          <p className="2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl poppins-bold mb-4">
            Integrated with your
          </p>
          <p className="2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl poppins-bold mb-4">
            favourite apps
          </p>
          <p className="2xl:text-16-2 xl:text-16-2 lg:text-16-2 md:text-14md sm:text-14md xs:text-14md ls:text-14md ms:text-14md poppins-regular">
            Lorem ipsum dolor sit amet consectetur. Tortor sed aliquam sed id
          </p>
          <p className="2xl:text-16-2 xl:text-16-2 lg:text-16-2 md:text-14md sm:text-14md xs:text-14md ls:text-14md ms:text-14md poppins-regular mb-8">
            enim donec pharetra. Sit a quam sed ante nisl eget mauris amet.
          </p>
          <button className="bg-white text-[#684fff] px-9 py-5 rounded-full font-semibold hover:bg-[#684fff] hover:text-white hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyIntegration;