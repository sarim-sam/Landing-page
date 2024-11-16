// IMPORTS
import React from 'react';
import { Send } from 'lucide-react'


// FRONTEND
const MyNewsletter = () => {
  return (
    <div className="relative w-full min-h-[35vh] overflow-hidden bg-[#4F46E5] flex flex-col items-center justify-center">
    {/* Background GIF */}
      <img 
        src="/myGif.gif" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Animation"
      />

      <div className="relative flex items-center justify-center text-white space-x-8"></div>
      <p className="text-4xl z-10 poppins-bold text-center mb-4 text-white min-h-12">
        Subscribe Newsletter & get
      </p>
      
      <p className="text-center p-1 pl-2 mb-8 poppins-medium max-w-lg opacity-90 lh-32 text-white">
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing.
      </p>

      <div className="relative poppins-medium w-full max-w-2xl min-h-30">
        <input 
          type="email"
          placeholder="Your email"
          className="w-full min-h-20 px-6 py-4 rounded-full text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button 
          className="absolute min-h-16 poppins-medium right-2 top-1/2 -translate-y-1/2 bg-[#684fff] text-white px-7 py-3 rounded-full flex items-center gap-2 transition-colors"
        >
          <Send className="h-4 w-4" />
          Subscribe
          
        </button>
      </div>
    </div>
  );
};

export default MyNewsletter;