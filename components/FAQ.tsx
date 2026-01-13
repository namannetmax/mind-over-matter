
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg transition-colors ${isOpen ? 'text-red-700' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-white/60 leading-relaxed font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is HIT training?",
      answer: "High-Intensity Training (HIT) is a form of resistance training that focuses on brief, infrequent, and intense sessions. It is designed to safely push muscles to their momentary limit to trigger the strongest possible growth response."
    },
    {
      question: "Is it safe for beginners?",
      answer: "Absolutely. Our programs are safer than traditional volume training because we emphasize slow, controlled movements and proper form under the close supervision of an expert coach."
    },
    {
      question: "Can I lose weight with this program?",
      answer: "Yes. By building metabolically active muscle tissue, you increase your basal metabolic rate (BMR), meaning you burn more calories even at rest. Combined with our nutritional guidance, it is highly effective for fat loss."
    },
    {
      question: "I have an old injury, can I still train?",
      answer: "Our trainers are experienced in working around limitations. Because we focus on controlled intensity rather than explosive movements, HIT is often one of the best ways to rebuild strength after injury."
    },
    {
      question: "How long is a typical session?",
      answer: "Most sessions last between 30 and 45 minutes. Because of the extreme intensity, your body only requires a short window of stimulus to begin the adaptation process."
    }
  ];

  return (
    <section className="bg-black py-24 px-6 relative">
      <div className="max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000">
        <h2 className="text-4xl font-black mb-12 tracking-tight text-center">COMMON QUESTIONS</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
