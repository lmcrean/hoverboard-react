// components/mainpage/FeaturesCalltoAction/FeaturesCalltoAction.tsx

import React from 'react';
import './FeaturesCalltoAction.css';

const FeaturesCallToAction = () => {
    return (
        <section id="features-call-to-action" className="display-grid">
        <div className="background-wrapper background-wrapper-black">
        <img src="assets/media/features-intro.png" alt="Features introduction on mock-up browser window"></img>
        <div id="features-h2-p-button" className="text-float-right text-white">
        <h2>Curious about our Features?</h2>
        <p>Let us show you our cutting edge technology.</p>
        <div className="button">
        <a href="features.html">
            read more here
        </a>
        </div>
        </div>
        </div>
        </section>
    )
}

export default FeaturesCallToAction;
