import React from 'react';
import styles from './MissionIntro.module.css';

const MissionIntro: React.FC = () => {
  return (
    <section className={`${styles['mission-intro']} ${styles['responsive-1to2-columns']}`}>
      <img className={`${styles['bg-squiggle-spring']}`} src="assets/media/bg_squiggles-spring.png" alt="background graphic spring" />
      <h1 className={styles['mission-heading']}>Hoverboard is on a mission to help schools transform with the digital revolution</h1>
      <img className={styles['mission-image']} src="assets/media/mission-image.png" alt="Hoverboard in action, students watching online lesson" />
      <img className={styles['bg-squiggle-flash']} src="assets/media/bg-squiggles-flash.png" alt="background graphic flash" />
      <p className={styles['mission-more-info']}>
        Our Platform offers an all-in-one Virtual Learning Environment tailored to the needs of real schools.
        More than ever, they are in need to function efficiently and effectively to meet the needs of our students. <br /><br />
        Designed by real classroom teachers, Hoverboard offers meaningful features...
      </p>
      <div className={`${styles['app-intro-nested']} ${styles['features-wrapper']} ${styles['hide-in-mobile-and-tablet']} ${styles['show-in-laptop-and-desktop']} mx-auto`}>
        <div className={styles['features-heading-container mx-auto']}>
          <h2>Features for Teachers</h2>
        </div>
        <div className="flex flex-col mobile:flex-row justify-center items-center gap-6 px-4 mx-auto">
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img src="assets/media/gallery-view.png" alt="Gallery View app icon" className="w-16 h-16 mb-2" />
            <p className="text-center">Gallery View</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img src="assets/media/peer-feedback.png" alt="Peer Feedback app icon" className="w-16 h-16 mb-2" />
            <p className="text-center">Peer Feedback</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img src="assets/media/deep-assessment.png" alt="Deep Assessment app icon" className="w-16 h-16 mb-2" />
            <p className="text-center">Deep Assessment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;