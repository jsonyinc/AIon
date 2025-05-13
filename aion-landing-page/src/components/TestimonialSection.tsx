"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
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
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" variants={item}>
            고객의 목소리
          </motion.h2>
          <motion.p className="text-lg text-neutral-charcoalGray mb-10" variants={item}>
            AION과 함께 혁신을 이룬 기업들의 이야기를 들어보세요.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="bg-neutral-cloudWhite p-6 rounded-lg shadow-sm text-left" variants={item}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl">K</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-primary">김민수</h4>
                  <p className="text-sm text-neutral-steelGray">테크솔루션 대표</p>
                </div>
              </div>
              <p className="text-neutral-charcoalGray italic">AION의 AI 솔루션 덕분에 데이터 분석 시간이 60% 단축되었습니다. 비즈니스 의사결정이 훨씬 빨라졌습니다.</p>
            </motion.div>
            
            <motion.div className="bg-neutral-cloudWhite p-6 rounded-lg shadow-sm text-left" variants={item}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center font-bold text-xl">L</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-primary">이수진</h4>
                  <p className="text-sm text-neutral-steelGray">글로벌마케팅 이사</p>
                </div>
              </div>
              <p className="text-neutral-charcoalGray italic">고객 세분화와 타겟 마케팅에 AION의 기술을 활용하면서 캠페인 전환율이 35% 향상되었습니다.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
