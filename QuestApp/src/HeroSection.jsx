import React from 'react';
import Navbar from './Navbar';
import HeroSection2 from './HeroSection2';
import HeroSection3 from './HeroSection3';
import MainContent from './MainContent';
import MainContent1 from './MainContent1';
import Footer from './Footer';

const HeroSection = () => {
  return (
    <div id="root ">
      <div className="bg-[#0D0D0D] min-h-screen">
        <div className="w-full lg:px-[100px] py-6 fixed top-0 z-50 backdrop-blur-3xl ">
        <Navbar/>
        </div>
        <HeroSection2/>
        <HeroSection3/>
        <MainContent/>
        <MainContent1/>
        <Footer/>
      </div>
    </div>
  );
};

export default HeroSection;