// IMPORTS
import React, { useState } from 'react';
import { faqs } from '../../data/data.js';


// FRONTEND
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div 
    onClick={onClick} 
    className="cursor-pointer bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300"
    style={{ borderLeft: isOpen ? "2px solid #4F46E5" : "2px solid transparent" }}
  >
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
      <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </span>
    </div>
    {isOpen && (
      <p className="mt-4 text-gray-600">
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
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div>
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
