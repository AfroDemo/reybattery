import React from 'react';
import { Battery } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Battery className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-xl">PowerCell</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a></li>
            <li><a href="#specs" className="text-gray-600 hover:text-indigo-600 transition-colors">Specifications</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a></li>
          </ul>
        </nav>
        <a 
          href="#order" 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm md:text-base"
        >
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;