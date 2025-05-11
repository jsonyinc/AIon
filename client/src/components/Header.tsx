import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-primary">
          <span className="text-xl font-display font-bold tracking-tight">AIon</span>
          <span className="text-secondary font-medium">Inc.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-primary/80 hover:text-primary transition-colors duration-200">문제 인식</a>
          <a href="#solution" className="text-sm text-primary/80 hover:text-primary transition-colors duration-200">솔루션</a>
          <a href="#benefits" className="text-sm text-primary/80 hover:text-primary transition-colors duration-200">혜택</a>
          <a href="#about" className="text-sm text-primary/80 hover:text-primary transition-colors duration-200">회사 소개</a>
          <a href="#contact" className="text-sm text-primary/80 hover:text-primary transition-colors duration-200">연락처</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden md:block bg-accent hover:bg-accent/90 text-white font-medium text-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            상담 신청
          </a>
          <button 
            className="md:hidden text-primary" 
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden bg-white px-4 py-3 shadow-md ${mobileMenuOpen ? '' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-4">
          <a 
            href="#problem" 
            className="text-sm text-primary/80 hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            문제 인식
          </a>
          <a 
            href="#solution" 
            className="text-sm text-primary/80 hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            솔루션
          </a>
          <a 
            href="#benefits" 
            className="text-sm text-primary/80 hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            혜택
          </a>
          <a 
            href="#about" 
            className="text-sm text-primary/80 hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            회사 소개
          </a>
          <a 
            href="#contact" 
            className="text-sm text-primary/80 hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            연락처
          </a>
          <a 
            href="#contact" 
            className="bg-accent hover:bg-accent/90 text-white text-center font-medium text-sm px-4 py-2 rounded-full transition-all duration-200"
            onClick={closeMobileMenu}
          >
            상담 신청
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
