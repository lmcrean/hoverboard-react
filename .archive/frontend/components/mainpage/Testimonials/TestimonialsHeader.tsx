import React from "react";

const TestimonialsHeader = () => {
  return (
    <section className="testimonials-header py-6 tablet:py-8 laptop:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Wrap text in a width-constrained container */}
          <div className="flex-shrink-0 basis-full tablet:basis-auto max-w-[80%] tablet:max-w-[600px] text-center">
            <h2 className="text-xl mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold whitespace-normal">
              What our users are saying about
            </h2>
          </div>
          {/* Logo with flexible width */}
          <div className="flex-shrink-0">
            <img
              src="/assets/media/navbarlogo.png"
              alt="Hoverboard Logo"
              className="h-8 mobile:h-10 tablet:h-12 laptop:h-14 desktop:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeader;