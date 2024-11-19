import React from 'react';
import HeroSection from "../Components/Main/HeroSection";
import About from "../Components/Main/About";
import Features from "../Components/Main/Features";
import Services from "../Components/Main/Services";
import Footer from "../Components/common/footer";
import ServicesPage from "./ServicesPage";
export function MainPage() {
    return (
       <>
          <HeroSection/>
          <About/>
          <ServicesPage/>
          <Features/>
          <Services/>
          <Footer/>
       </>
    );
};