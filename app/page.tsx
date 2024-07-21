"use client";

import CustomNavbar from '../components/Navbar/Navbar'; 
import HeroLanding from '../components/mainpage/HeroLanding/HeroLanding';
import MissionIntro from '../components/mainpage/MissionIntro/MissionIntro';
import Testimonials from '../components/mainpage/Testimonials/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <HeroLanding />
      <MissionIntro />
      <Testimonials />
    </div>
  );
}