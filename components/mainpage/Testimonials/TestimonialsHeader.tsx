import React from "react";
import styles from './TestimonialsHeader.module.css';

const TestimonialsHeader = () => {
    return (
      <section className={styles['testimonials-header']}>
        <div className={styles['testimonials-intro']}>
          <h2>What our users are saying about</h2>
          <img src="assets/media/navbarlogo.png" alt="inline-logo" className={styles['testimonial-logo-inline']} />
        </div>
      </section>
    );
  };

export default TestimonialsHeader;