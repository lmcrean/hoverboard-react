// pages/features.tsx

"use client"

import React from 'react';
import FeaturesHeader from '../components/featurespage/FeaturesHeader/FeaturesHeader';
import FeaturesDetail from '../components/featurespage/FeaturesDetail/FeaturesDetail';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <main className="pt-16">
      <FeaturesHeader />
      <FeaturesDetail />
      <Footer />
    </main>
  );
};

export default Features;
