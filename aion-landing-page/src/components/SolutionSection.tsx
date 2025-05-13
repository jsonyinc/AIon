"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function SolutionSection() {
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
    <section id="solution" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" variants={item}>
            AION의 AI 솔루션
          </motion.h2>
          <motion.p className="text-lg text-neutral-charcoalGray mb-10" variants={item}>
            AION은 인공지능 기술을 활용하여 비즈니스 혁신을 가속화하고, 디지털 전환을 지원합니다.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <motion.div className="bg-neutral-cloudWhite p-6 rounded-lg shadow-sm" variants={item}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">AI 기반 분석</h3>
              <p className="text-neutral-steelGray mb-4">데이터를 분석하고 예측하여 비즈니스 의사결정을 지원하는 강력한 AI 알고리즘.</p>
              <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10">
                자세히 보기
              </Button>
            </motion.div>
            
            <motion.div className="bg-neutral-cloudWhite p-6 rounded-lg shadow-sm" variants={item}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-8 8-4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">프로세스 자동화</h3>
              <p className="text-neutral-steelGray mb-4">반복적인 작업을 자동화하여 시간과 비용을 절감하고 효율성을 극대화.</p>
              <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10">
                자세히 보기
              </Button>
            </motion.div>
          </div>
          
          <motion.div className="mt-10" variants={item}>
            <Button asChild className="bg-accent text-white hover:bg-accent/90">
              <a href="#contact">솔루션 문의</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
