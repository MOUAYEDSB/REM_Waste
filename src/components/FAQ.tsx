import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-gray-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How long can I keep a skip?",
      answer: "Standard hire is for 14 days, but we can arrange shorter or longer periods depending on your needs. Contact us for more information."
    },
    {
      question: "Do I need a permit for a skip?",
      answer: "If the skip is placed on a public road, you'll need a permit. We can arrange this for you at an additional cost. No permit is needed for skips on private property."
    },
    {
      question: "What can't I put in a skip?",
      answer: "Hazardous waste including asbestos, batteries, chemicals, paint, tires, gas bottles, electrical appliances, and medical waste cannot be disposed of in a standard skip."
    },
    {
      question: "How do I know what size skip I need?",
      answer: "The size depends on your project. As a guide: small garden clearance (mini skip), home renovation (midi skip), large construction work (builder's skip). Our team can advise on the best option for your needs."
    }
  ];
  
  return (
    <div className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;