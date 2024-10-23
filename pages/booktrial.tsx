import React from 'react';
import CustomNavbar from '../components/Navbar/Navbar'; 
import SignUpHeader from '@/components/signuppage/SignUpHeader';
import SignUpForm from '@/components/signuppage/SignUpForm';
import Footer from '@/components/Footer';

const SignUp = () => {
  return (
    <main className="pt-16">
      <SignUpHeader />
      <SignUpForm />
      <Footer />
    </main>
  );
};

export default SignUp;
