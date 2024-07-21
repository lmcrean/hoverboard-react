import React from 'react';
import './MissionIntro.css';

const MissionIntro: React.FC = () => {
  return (
    <section id="mission-intro" className="responsive-1to2-columns">
      <img id="bg-squiggle-spring" src="assets/media/bg_squiggles-spring.png" alt="background graphic spring" />
      <h1 id="mission-heading">Hoverboard is on a mission to help schools transform with the digital revolution</h1>
      <img id="mission-image" src="assets/media/mission-image.png" alt="Hoverboard in action, students watching online lesson" />
      <img id="bg-squiggle-flash" src="assets/media/bg-squiggles-flash.png" alt="background graphic flash" />
      <p id="mission-more-info">
        Our Platform offers an all-in-one Virtual Learning Environment tailored to the needs of real schools.
        More than ever, they are in need to function efficiently and effectively to meet the needs of our students. <br /><br />
        Designed by real classroom teachers, Hoverboard offers meaningful features...
      </p>
      <div id="app-intro-nested" className="features-wrapper hide-in-mobile-and-tablet show-in-laptop-and-desktop">
        <div className="features-heading-container">
          <h2>Features for Teachers</h2>
        </div>
        <div className="app-wrapper">
          <div className="feature-item">
            <img src="assets/media/gallery-view.png" alt="Gallery View app icon" />
            <p>Gallery View</p>
          </div>
          <div className="feature-item">
            <img src="assets/media/peer-feedback.png" alt="Peer Feedback app icon" />
            <p>Peer Feedback</p>
          </div>
          <div className="feature-item">
            <img src="assets/media/deep-assessment.png" alt="Deep Assessment app icon" />
            <p>Deep Assessment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
