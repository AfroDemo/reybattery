import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Revitalize Your Nokia With Premium Power
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Authentic Nokia replacement battery with an impressive 2000mAh capacity. 
              Extend your device's life with reliable, long-lasting power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#order" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-all transform hover:scale-105 text-center font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Order Now
              </a>
              <a 
                href="#specs" 
                className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-colors text-center font-medium text-lg"
              >
                View Specifications
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-float">
            <div className="bg-white p-4 rounded-xl shadow-2xl">
              <img 
                src="https://m.media-amazon.com/images/I/711qWIL96NL._AC_SL1500_.jpg" 
                alt="Nokia Battery 2000mAh" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                2000mAh
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-slate-400 hover:text-indigo-600 transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;