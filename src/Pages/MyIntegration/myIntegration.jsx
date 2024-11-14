import React from 'react';

const MyIntegration = () => {
  return (
    <div className="relative w-full h-[37.5rem] mx-auto overflow-hidden bg-[#4F46E5] flex items-center justify-center">
      {/* Background GIF */}
      <img 
        src="/src/assets/myGif.gif" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Animation"
      />

      {/* Background Image */}
      <img 
        src="/src/assets/columns.png" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Background Overlay"
      />

      {/* Centered Frame and Text Container */}
      <div className="relative flex items-center justify-center text-white text-left z-10 space-x-8">
        {/* Frame Image */}
        <img 
          src="src/assets/frame.png" 
          className="w-full max-w-xs h-auto"
          alt="Frame"
        />

        {/* Text Content */}
        <div className="flex flex-col items-start">
          <p className="text-5xl mb-4 font-bold">
            Integrated with your 
          </p>
          <p className="text-5xl mb-4 font-bold">
          favourite apps
          </p>
          <p className="text-[16px] mb-8 max-w-lg font-normal">
            Lorem ipsum dolor sit amet consectetur. Tortor sed aliquam sed id
            enim donec pharetra. Sit a quam sed ante nisl eget mauris amet.
          </p>
          <button className="bg-white text-[#4F46E5] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyIntegration;
