// pages/features.tsx

"use client"

import React from 'react';
import FeaturesHeader from '../components/featurespage/FeaturesHeader/FeaturesHeader';
import FeaturesDetail from '../components/featurespage/FeaturesDetail/FeaturesDetail';

const Features = () => {
  return (
    <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <FeaturesHeader />
      <FeaturesDetail />
    </main>
  );
};

export default Features;
