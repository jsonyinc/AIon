"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
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
    <section id="problem" className="py-16 bg-neutral-cloudWhite">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" variants={item}>
            비즈니스 혁신을 가로막는 장애물
          </motion.h2>
          <motion.p className="text-lg text-neutral-charcoalGray mb-10" variants={item}>
            오늘날의 기업들은 디지털 전환과 AI 기술 도입에 어려움을 겪고 있습니다.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={item}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">기술적 장벽</h3>
              <p className="text-neutral-steelGray">복잡한 AI 기술을 이해하고 구현하는 데 필요한 전문 지식이 부족합니다.</p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={item}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">비용 문제</h3>
              <p className="text-neutral-steelGray">AI 솔루션 도입과 유지보수에 드는 높은 초기 비용이 부담스럽습니다.</p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={item}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">적응 속도</h3>
              <p className="text-neutral-steelGray">빠르게 변화하는 기술 환경에 적응하고 경쟁 우위를 유지하기 어렵습니다.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
