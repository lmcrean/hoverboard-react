import React from 'react';

interface Feature {
  id: number;
  iconSrc: string;
  title: string;
}

const FeaturesHeader: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      iconSrc: "/assets/media/gallery-view.png",
      title: 'Gallery View'
    },
    {
      id: 2,
      iconSrc: "/assets/media/peer-feedback.png",
      title: 'Peer Feedback'
    },
    {
      id: 3,
      iconSrc: "/assets/media/deep-assessment.png",
      title: 'Deep Assessment'
    }
  ];


  return (
    <header className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          Features for Teachers
        </h1>
        
        {/* Mobile: Single column */}
        <div className="block sm:hidden">
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-3">
                  <img
                    src={feature.iconSrc}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Three columns */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 gap-0">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-1">
                  <img
                    src={feature.iconSrc}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default FeaturesHeader;