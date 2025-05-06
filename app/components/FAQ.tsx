"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-slate-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-indigo-600 flex-shrink-0" />
        )}
      </button>
      <div
        className={`mt-2 text-slate-600 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question:
        "How do I know if this battery is compatible with my Nokia phone?",
      answer:
        "This battery is compatible with Nokia 6.1, 7 Plus, and 7.1 models. If you're unsure, please contact us before ordering.",
    },
    {
      question: "What's the typical lifespan of this battery?",
      answer:
        "While this is a used battery, it has been tested and has less than 100 charge cycles. You can expect it to last for several hundred more cycles with proper care.",
    },
    {
      question: "Do you provide installation instructions?",
      answer:
        "Yes, we provide basic installation instructions with every order. If you need additional help, you can find detailed video tutorials on our website.",
    },
    {
      question: "Is there a warranty on this battery?",
      answer:
        "Yes, we offer a 10-day warranty against manufacturing defects. This doesn't cover damage from improper installation or use.",
    },
    {
      question: "How long will shipping take?",
      answer:
        "Orders typically ship within 1-2 business days. Delivery times depend on your location, usually 3-5 business days for domestic orders and 7-14 days for international orders.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our Nokia replacement
            batteries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
