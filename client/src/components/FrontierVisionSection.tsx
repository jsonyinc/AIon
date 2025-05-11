import { motion } from "framer-motion";

export default function FrontierVisionSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="frontier" className="py-16 md:py-24 bg-primary text-white clip-path-slant">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4"
            variants={item}
          >
            AI '프론티어 기업'의 비전
          </motion.h2>
          <motion.p 
            className="text-white/80 text-lg"
            variants={item}
          >
            기존의 경계를 넘어, AIon Inc.는 인간과 AI의 협업이 만드는 미래형 조직을 제시합니다
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-300"
            variants={item}
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">인간-AI 협업 모델</h3>
            <p className="text-white/70">
              단순한 AI 도구 사용을 넘어, '에이전트 보스'를 중심으로 인간과 AI 에이전트가 각자의 강점을 활용하여 시너지를 창출하는 새로운 조직 모델을 구현합니다.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-300"
            variants={item}
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">실질적 성과 실현</h3>
            <p className="text-white/70">
              막연한 AI 도입을 넘어, 구체적이고 측정 가능한 비즈니스 성과를 창출하는 체계적인 접근법을 제공합니다. 평균 37%의 생산성 향상과 의사결정 속도 42% 개선이 증명합니다.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-300"
            variants={item}
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">지속 가능한 혁신</h3>
            <p className="text-white/70">
              일회성 기술 도입이 아닌, AI 역량이 지속적으로 발전하는 조직 문화와 시스템을 구축합니다. 미래 변화에 유연하게 대응할 수 있는 견고한 기반을 마련합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
