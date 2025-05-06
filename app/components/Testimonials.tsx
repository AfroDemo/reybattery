import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-slate-600 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-indigo-600 font-medium">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Nokia 7 Plus User",
      content: "This replacement battery has given my old Nokia a new lease on life. Battery life is excellent, just as advertised.",
      rating: 5
    },
    {
      name: "Sarah Miller",
      role: "Nokia 6.1 Owner",
      content: "I was skeptical about buying a used battery, but the condition is excellent and it holds a charge all day.",
      rating: 4
    },
    {
      name: "Michael Chen",
      role: "Tech Enthusiast",
      content: "Great value for money. The 2000mAh capacity makes a noticeable difference compared to my worn-out original battery.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people who've purchased our Nokia replacement batteries have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;