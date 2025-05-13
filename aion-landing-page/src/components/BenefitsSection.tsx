"use client";

import { motion } from "framer-motion";

export default function BenefitsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="benefits" className="py-16 bg-neutral-cloudWhite">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" variants={item}>
            AION과 함께하는 이점
          </motion.h2>
          <motion.p className="text-lg text-neutral-charcoalGray mb-10" variants={item}>
            AION의 AI 솔루션으로 비즈니스 성과를 극대화하세요.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="bg-white p-6 rounded-lg shadow-sm text-left" variants={item}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">효율성 증대</h3>
              <p className="text-neutral-steelGray">AI 기반 자동화로 작업 시간을 단축하고 생산성을 높입니다.</p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-sm text-left" variants={item}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">비용 절감</h3>
              <p className="text-neutral-steelGray">효율적인 리소스 활용으로 운영 비용을 절감합니다.</p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-sm text-left" variants={item}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">혁신적 사고</h3>
              <p className="text-neutral-steelGray">AI 기술로 새로운 비즈니스 기회를 발굴하고 경쟁력을 강화합니다.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
