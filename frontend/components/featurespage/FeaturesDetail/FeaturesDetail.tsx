import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const FeaturesDetail: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Assessment has never been more optimised with Gallery view",
      description: "Experience a revolutionary approach to assessment with our gallery view feature. Say goodbye to tedious, time-consuming grading processes and embrace a more efficient and intuitive method. With our gallery view, you'll have a visually appealing and organized display of student work, allowing you to assess multiple submissions at once. Easily compare, contrast, and evaluate student performance with just a glance. This optimized assessment tool will save you valuable time, enabling you to focus on providing valuable feedback and helping students thrive.",
      image: "/assets/media/browser-gallery-view.png"
    },
    {
      id: 2,
      title: "Write engaging, personalised prompts for Peer Feedback",
      description: "Unlock the power of peer feedback with our dynamic prompt generator. Gone are the days of generic, uninspiring questions that yield limited insights. With our platform, you can effortlessly craft engaging and personalized prompts that encourage meaningful and constructive peer feedback. Empower students to take an active role in their own learning journey by sparking thought-provoking discussions and promoting critical thinking skills. By tailoring prompts to individual students, you'll inspire deeper engagement and foster a supportive learning community where everyone's voice is heard.",
      image: "/assets/media/browser-peer-feedback.png"
    },
    {
      id: 3,
      title: "Adapt to the trends with Deep Assessment",
      description: "Stay ahead of the curve and adapt to your student's learning with our cutting-edge Deep Assessment feature. Powered by AI, our software offers a comprehensive analysis of student performance, going beyond traditional methods. By analyzing students' self-reflections, peer feedback, and mock exams, our advanced algorithms provide a holistic understanding of each student's progress, strengths, and areas for improvement. With this wealth of data, you can make informed decisions and tailor your teaching approach to meet the unique needs of every student. Uncover hidden patterns, identify knowledge gaps, and provide targeted support, empowering your students to reach their full potential.",
      image: "/assets/media/browser-deep-assessment.png"
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`mb-16 last:mb-0 lg:mb-32 ${
              index !== features.length - 1 ? 'border-b border-gray-200 pb-16 lg:pb-32' : ''
            }`}
          >
            <div className={`flex flex-col gap-8 items-center lg:gap-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-6 sm:text-3xl lg:text-4xl">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesDetail;