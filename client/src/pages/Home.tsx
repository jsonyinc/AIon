import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FrontierVisionSection from "@/components/FrontierVisionSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Handle header scroll behavior
    const header = document.querySelector('header');
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header?.classList.add('shadow-md', 'py-2');
        header?.classList.remove('py-3');
      } else {
        header?.classList.remove('shadow-md', 'py-2');
        header?.classList.add('py-3');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FrontierVisionSection />
        <BenefitsSection />
        <TestimonialSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
