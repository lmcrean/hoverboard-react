// components/mainpage/SignupCalltoAction/SignupCalltoAction.tsx
import React from 'react';
import styles from './SignupCalltoAction.module.css';

const SignupCalltoAction = () => {
  return (
    <section className={styles['signup-call-to-action']}>
      <div className={`${styles['background-wrapper']} ${styles['background-wrapper-black']}`}></div>
      <img src="/assets/media/signup-browser-image.png" alt="Sign up introduction on mock-up browser window" className={styles['signup-intro-image']} /><br />
      <div className={`${styles['signup-h2-p-button']} ${styles['text-white']}`}>
        <h2>Try our software for free</h2><br />
        <p>Provide an entirely new level of engagement for your students</p><br />
        <div className={styles.button}>
          <a href="booktrial.html">click here</a>
        </div>
      </div>
    </section>
  );
};

export default SignupCalltoAction;