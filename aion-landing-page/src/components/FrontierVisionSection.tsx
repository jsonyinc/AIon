"use client";

import { motion } from "framer-motion";

export default function FrontierVisionSection() {
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
    <section id="vision" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={item}>
            프론티어 비전: AI와 함께하는 미래
          </motion.h2>
          <motion.p className="text-lg mb-8" variants={item}>
            AION은 AI 기술의 선두에서 비즈니스 혁신을 이끌며, 지속 가능한 성장을 위한 새로운 가능성을 탐구합니다.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div className="bg-white/10 p-6 rounded-lg" variants={item}>
              <h3 className="text-xl font-semibold mb-3">지속 가능한 혁신</h3>
              <p className="opacity-90">AI 기술을 활용하여 환경 친화적이고 지속 가능한 비즈니스 모델을 개발합니다.</p>
            </motion.div>
            
            <motion.div className="bg-white/10 p-6 rounded-lg" variants={item}>
              <h3 className="text-xl font-semibold mb-3">인간 중심 AI</h3>
              <p className="opacity-90">기술과 인간의 협력을 극대화하여 더 나은 의사결정과 창의적 솔루션을 제공합니다.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
