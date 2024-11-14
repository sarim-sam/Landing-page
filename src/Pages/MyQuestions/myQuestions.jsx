// IMPORTS
import React, { useState } from 'react';
import { faqs } from '../../data/data.js';
import { FiArrowDownRight } from 'react-icons/fi';

// FRONTEND
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div 
    onClick={onClick} 
    className="cursor-pointer bg-white p-10 rounded-xl shadow-md mb-8 transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <p className=" text-lg poppins-semibold text-gray-800">{question}</p>
      <span 
        className={`flex items-center poppins-semibold justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300 ${isOpen ? "border-[#684fff] rotate-90" : "border-black"}`}
      >
        <FiArrowDownRight size={28} color={isOpen ? "#684fff" : "#2C2C54"} />
      </span>
    </div>
    {isOpen && (
      <p className="mt-6 text-gray-600">
        {answer}
      </p>
    )}
  </div>
);

const MyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-3xl min-h-[65vh] mx-auto overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      <p className="text-5xl poppins-bold text-center text-gray-900 mb-6">Frequently</p>
      <p className="text-5xl poppins-bold text-center text-gray-900 mb-12">Asked Questions</p>
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
  );
};

export default MyQuestions;
