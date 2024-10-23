import React from 'react';
import Link from 'next/link';

const FeaturesCallToAction = () => {
  return (
    <section className="relative w-full">
      {/* Main container with full width background */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gray-900">
        {/* Content container with responsive margin and grid layout */}
        <div className="relative grid grid-cols-1 laptop-small:grid-cols-2 gap-6 
          mx-auto max-w-7xl px-4
          pt-0 pb-12 laptop:pb-20">
          
          {/* Image container with enhanced overflow positioning */}
          <div className="relative z-10 mx-auto laptop-small:mx-0 -mt-16 laptop:-mt-24">
            <img 
              src="/assets/media/features-intro.png" 
              alt="Features introduction on mock-up browser window"
              className="w-3/4 laptop-small:w-full max-w-[400px] h-auto mx-auto 
                laptop-small:ml-8 
                transform 
                mobile:translate-y-0
                tablet:translate-y-0
                laptop-small:-translate-y-6
                laptop:-translate-y-8"
            />
          </div>

          {/* Text content container */}
          <div className="text-center laptop-small:text-left text-white 
            px-4 
            tablet:px-6 
            laptop-small:pr-8 
            laptop:pr-12 
            flex 
            flex-col 
            justify-center
            min-h-[200px]
            laptop:min-h-[250px]">
            
            <h2 className="text-2xl 
              tablet:text-3xl 
              laptop:text-4xl 
              desktop:text-5xl 
              font-bold mb-4">
              Curious about our Features?
            </h2>
            
            <p className="text-base 
              tablet:text-lg 
              laptop:text-xl 
              mb-6
              max-w-xl
              mx-auto">
              Let us show you our cutting edge technology.
            </p>
            
            <Link 
              href="/features" 
              className="inline-block px-6 py-3 text-white border-2 border-white rounded-full 
                hover:bg-white hover:text-gray-900 transition-colors duration-300
                text-sm
                tablet:text-base
                laptop:text-lg
                w-fit
                mx-auto
                laptop-small:mx-0"
            >
              read more here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCallToAction;