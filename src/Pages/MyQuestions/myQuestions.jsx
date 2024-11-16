// IMPORTS
import React, { useState } from 'react';
import { faqs } from '../../data/data.js';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

// COMPONENTS
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white p-10 rounded-xl shadow-md mb-8"
  >
    <div className="flex justify-between items-center">
      <p className="poppins-semibold 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg xs:text-lg ls:text-md ms:text-sm text-gray-800">{question}</p>
      <span
        className={`flex items-center poppins-semibold justify-center 2xl:w-12 2xl:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:h-10 xs:w-10 ls:w-8 ls:h-8 ms:w-8 ms:h-8 rounded-full border-2 ${
          isOpen ? 'border-[#684fff]' : 'border-black'
        }`}
      >
        {isOpen ? (
          <FiArrowUpRight size={28} color="#684fff" />
        ) : (
          <FiArrowDownRight size={28} color="#2C2C54" />
        )}
      </span>
    </div>
    {isOpen && <p className="mt-6 text-gray-600">{answer}</p>}
  </div>
);

const MyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      {/* Background Images */}
      <img
        src="/pattern-left.png"
        alt="background-shape"
        className="absolute top-0 left-2     2xl:w-36 xl:w-36 lg:w-32 md:w-24 sm:w-20 xs:w-16 ls:w-16 ms:w-16 pointer-events-none z-0"
      />
      <img
        src="/pattern-right.png"
        alt="background-shape"
        className="absolute top-40 right-1   2xl:w-48 xl:w-48 lg:w-32 md:w-32 sm:w-28 xs:w-16 ls:w-16 ms:w-16 sm:top-0 xs:top-0 ls:top-0 ms:top-0 pointer-events-none z-0"
      />
      <img
        src="/pattern-center.png"
        alt="background-shape"
        className="absolute bottom-6 left-64 2xl:w-48 xl:w-48 lg:w-32 md:w-32 sm:w-28 xs:w-16 ls:w-16 ms:w-16 pointer-events-none z-0"
      />


      {/* FAQ Content */}
      <div className="max-w-3xl w-full">
        <p className="poppins-bold text-center 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl text-gray-900 mb-6">
          Frequently
        </p>
        <p className="poppins-bold text-center 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl text-gray-900 mb-12">
          Asked Questions
        </p>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyQuestions;
