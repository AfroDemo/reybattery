import React from 'react';

const Specifications: React.FC = () => {
  const specs = [
    { name: "Capacity", value: "2000mAh" },
    { name: "Voltage", value: "3.7V" },
    { name: "Chemistry", value: "Lithium-Ion" },
    { name: "Condition", value: "Used - Excellent" },
    { name: "Cycles", value: "Less than 100" },
    { name: "Compatible Models", value: "Nokia 6.1, 7 Plus, 7.1" },
    { name: "Warranty", value: "10 days" },
    { name: "Origin", value: "Genuine Nokia Part" }
  ];

  return (
    <section id="specs" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden relative">
              <img 
                src="https://m.media-amazon.com/images/I/71J+YIEVXWL._AC_SL1500_.jpg" 
                alt="Nokia Battery Close-up" 
                className="w-full h-auto rounded-lg object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Genuine Nokia Battery</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Technical Specifications</h2>
            <p className="text-lg text-slate-600 mb-8">
              This battery has been carefully tested and verified to meet Nokia's original specifications. 
              Each unit undergoes rigorous quality control to ensure optimal performance.
            </p>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-slate-200">
                {specs.map((spec, index) => (
                  <div key={index} className="flex py-4 px-6 hover:bg-slate-50 transition-colors">
                    <span className="w-1/2 font-medium text-slate-700">{spec.name}</span>
                    <span className="w-1/2 text-slate-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;