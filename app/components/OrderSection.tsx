"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';

const OrderSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="order" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to Order?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get your Nokia 2000mAh replacement battery today and enjoy extended battery life for your device.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Nokia Battery - 2000mAh</h3>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-indigo-600">TzS 4000</span>
                <span className="ml-2 line-through text-slate-500">TzS 8000</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Save 50%</span>
              </div>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-center text-slate-600">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Genuine Nokia battery
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  2000mAh capacity
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Less than 100 charge cycles
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  10-day warranty
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Free shipping
                </li>
              </ul>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                Order Now
              </button>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://m.media-amazon.com/images/I/71uzqhRkH0L._AC_SL1500_.jpg" 
                alt="Nokia Battery Package" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default OrderSection;