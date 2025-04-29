import React from 'react';
import Link from 'next/link';

const SignupCallToAction = () => {
  return (
    <section className="relative w-full">
      {/* Main container with full width background */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#f4a261]">
        {/* Content container with responsive margin and grid layout */}
        <div className="relative grid grid-cols-1 laptop-small:grid-cols-2 gap-6 
          mx-auto max-w-7xl px-4
          pt-0 pb-12 laptop:pb-20">
          
          {/* Text content container - First on larger screens */}
          <div className="text-center laptop-small:text-left text-white 
            order-2 laptop-small:order-1
            px-4 
            tablet:px-6 
            laptop-small:pl-8 
            laptop:pl-12 
            flex 
            flex-col 
            justify-center
            min-h-[200px]
            laptop:min-h-[250px]">
            
            <h2 className="text-2xl 
              tablet:text-3xl 
              laptop:text-4xl 
              desktop:text-5xl 
              font-bold mb-4 center">
              Try our software for free
            </h2>
            
            <p className="text-base 
              tablet:text-lg 
              laptop:text-xl 
              mb-6
              max-w-xl
              mx-auto">
              Provide an entirely new level of engagement for your students
            </p>
            
            <Link 
              href="/booktrial" 
              className="inline-block px-6 py-3 text-white border-2 border-white rounded-full 
                hover:bg-white hover:text-[#f4a261] transition-colors duration-300
                text-sm
                tablet:text-base
                laptop:text-lg
                w-fit
                mx-auto
                laptop-small:mx-0"
            >
              click here
            </Link>
          </div>

          {/* Image container - Second on larger screens */}
          <div className="relative z-10 mx-auto laptop-small:mx-0 -mt-16 laptop:-mt-24
            laptop-small:order-2">
            <img 
              src="/assets/media/signup-browser-image.png" 
              alt="Sign up introduction on mock-up browser window"
              className="w-3/4 laptop-small:w-full max-w-[400px] h-auto mx-auto 
                laptop-small:mr-8 
                transform 
                mobile:translate-y-0
                tablet:translate-y-0
                laptop-small:-translate-y-6
                laptop:-translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupCallToAction;