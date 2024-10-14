import React from 'react';

interface Testimonial {
  image: string;
  name: string;
  quote: string;
  title: string;
}

interface TestimonialPieceProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialPiece: React.FC<TestimonialPieceProps> = ({ testimonial, index }) => {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? 'bg-lightblue' : 'bg-lightsalmon';
  const quoteImageSrc = isEven ? '/assets/media/airquote-left.png' : '/assets/media/airquote-right.png';

  return (
    <div className={`relative flex flex-col sm:flex-row items-center mb-8 p-6 rounded-lg ${bgColor}`}>
      <div 
        className="absolute inset-0 opacity-30 mix-blend-screen z-0"
        style={{
          backgroundImage: `url(${quoteImageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: isEven ? 'left top' : 'right bottom',
          backgroundSize: '150px'
        }}
      ></div>
      <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 z-10 flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 z-10 text-center sm:text-left">
        <p className="text-lg sm:text-xl lg:text-lg mb-2 relative">
          {testimonial.quote}
        </p>
        <h3 className="font-bold text-xl sm:text-2xl lg:text-xl">{testimonial.name}</h3>
        <h4 className="text-sm sm:text-base lg:text-sm text-gray-600">{testimonial.title}</h4>
      </div>
    </div>
  );
};

export default TestimonialPiece;