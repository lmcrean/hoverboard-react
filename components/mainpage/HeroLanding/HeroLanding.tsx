import React from 'react';
import './HeroLanding.css';

const HeroLanding: React.FC = () => {
  return (
    <section id="hero-feature">
      <div className="hero-feature-container">
        
        <div className="hero-image-container mobile hide-in-tablet-laptop-and-desktop">
          <img src="/assets/media/hero-image.jpg" alt="Hero image, student on computer" />
        </div>

        <div className="hero-image-container tablet laptop hide-in-mobile hide-in-desktop">
          <img src="/assets/media/hero-image-desktop.jpg" alt="Hero image desktop version, student on computer" />
        </div>

        <div className="hero-image-container desktop hide-in-mobile-and-tablet-and-laptop show-in-desktop">
          <img src="/assets/media/hero-image-desktop-wide.png" alt="Hero image desktop version, student on computer" />
        </div>

        <div className="hero-heading">
          <h1>Supercharge their Learning</h1>
        </div>

      </div>
    </section>
  );
};

export default HeroLanding;