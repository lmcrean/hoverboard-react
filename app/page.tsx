"use client";

import CustomNavbar from '@/components/Navbar/Navbar';
import HeroLanding from '@/components/mainpage/HeroLanding/HeroLanding';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <HeroLanding />
    </div>
  );
}