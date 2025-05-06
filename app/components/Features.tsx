import React from 'react';
import { Battery, Clock, Zap, ShieldCheck } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Battery className="h-6 w-6 text-indigo-600" />,
      title: "High Capacity",
      description: "Powerful 2000mAh capacity provides exceptional battery life for your device."
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Long-Lasting",
      description: "Engineered to maintain performance through hundreds of charge cycles."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: "Fast Charging",
      description: "Compatible with quick charging to get your device powered up faster."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
      title: "Safe & Reliable",
      description: "Built-in protection against overcharging, overheating, and short circuits."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Premium Battery Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our Nokia replacement battery combines quality components with advanced technology to deliver reliable power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;