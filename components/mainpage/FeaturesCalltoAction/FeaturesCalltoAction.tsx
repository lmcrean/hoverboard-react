// components/mainpage/FeaturesCalltoAction/FeaturesCalltoAction.tsx

import React from 'react';
import './FeaturesCalltoAction.css';

const FeaturesCallToAction = () => {
    return (
        <section className="features-call-to-action display-grid">
        <img className="features-intro-image" src="assets/media/features-intro.png" alt="Features introduction on mock-up browser window"></img>
        <div className="background-wrapper background-wrapper-black"></div>
        <div className="features-h2-p-button text-float-right text-white">
            <h2>Curious about our Features?</h2>
            <p>Let us show you our cutting edge technology.</p>
            <div className="button">
            <a href="features.html">
                read more here
            </a>
        </div>
        </div>
        </section>
    )
}

export default FeaturesCallToAction;
