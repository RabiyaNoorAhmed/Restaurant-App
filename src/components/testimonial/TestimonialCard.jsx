import React from 'react';
import { GoStarFill } from "react-icons/go";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card p-4 bg-white shadow-lg rounded-lg">
      {/* Testimonial text */}
      <div className="flex items-center justify-between">
        <div className="mb-4">
          <p className="text-gray-600">{testimonial.text}</p>
        </div>
      </div>
      
      {/* Star rating */}
      <div className="flex items-start">
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, index) => (
            <GoStarFill key={index} />
          ))}
        </div>
      </div>
      
      {/* Testimonial author */}
      <div className="mt-4 flex items-center">
        <img src={testimonial.image} alt="User" className="w-10 h-10 rounded-full" />
        <h2 className="text-xl font-semibold ml-2">{testimonial.name}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
