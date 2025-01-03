import React from 'react';
import TestimonialPiece from './TestimonialPiece';
import { testimonials } from './TestimonialsData';

const TestimonialsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialPiece key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;