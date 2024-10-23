import React from 'react';

export default function SignUpHeader() {
  return (
    <div className="w-full px-4 mb-16 tablet:mb-20 laptop:mb-24">
      {/* Main container with relative positioning */}
      <div className="relative w-full max-w-[280px] mobile:max-w-[350px] tablet:max-w-[700px] laptop-small:max-w-3xl laptop:max-w-4xl mx-auto">
        {/* Title container */}
        <div className="w-full bg-amber-400 rounded-lg p-4 tablet:p-6 laptop:p-8 text-center">
          <h1 className="text-2xl mobile:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-white">
            Claim your Free Trial
          </h1>
        </div>
        
        {/* Image container with responsive positioning */}
        <div className="relative flex justify-center mt-0
          tablet:static tablet:mt-0
          laptop-small:absolute laptop-small:-bottom-16 laptop-small:right-1
          laptop:-bottom-20">
          <img 
            src="/assets/media/booktrial-clipboard-icon.png"
            alt="Clipboard icon"
            className="w-28 h-28 
              mobile:w-32 mobile:h-32 
              tablet:w-36 tablet:h-36 
              laptop-small:w-40 laptop-small:h-40 
              laptop:w-48 laptop:h-48 
              object-contain"
          />
        </div>
      </div>
    </div>
  );
}