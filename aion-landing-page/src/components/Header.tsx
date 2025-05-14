"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="AION Logo" width={60} height={60} className="mr-2" />
          <div className="text-3xl font-bold">AIon</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-secondary">Features</a>
          <a href="#benefits" className="hover:text-secondary">Benefits</a>
          <a href="#vision" className="hover:text-secondary">Vision</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </nav>
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-primary"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col px-4 py-2 space-y-3">
            <a href="#features" className="hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#benefits" className="hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
            <a href="#vision" className="hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Vision</a>
            <a href="#contact" className="hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
