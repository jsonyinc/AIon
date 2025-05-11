import { motion } from "framer-motion";

export default function SolutionSection() {
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
    <section id="solution" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-2/3 bg-secondary/5 -z-10 rounded-tl-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6"
              variants={item}
            >
              <span className="text-secondary">RomiⒻ</span>: '에이전트 보스'가 이끄는 AI 혁신 패러다임
            </motion.h2>
            <motion.p 
              className="text-muted mb-6"
              variants={item}
            >
              AIon Inc.는 "프론티어 기업"을 위한 명확한 비전과 '에이전트 보스(Agent Boss)' 시스템을 통해 AI를 활용한 획기적인 조직 혁신을 제시합니다. RomiⒻ는 단순한 AI 도구가 아닌, 인간과 AI가 융합된 진정한 협업 체계를 구현합니다.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={container}
            >
              <motion.div 
                className="flex items-start gap-3"
                variants={item}
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">전략적 AI 통합</h3>
                  <p className="text-sm text-muted">투자와 성과 사이의 간극을 해소하는 명확한 로드맵 제공</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                variants={item}
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">'에이전트 보스' 시스템</h3>
                  <p className="text-sm text-muted">인간과 AI의 이상적인 협업 모델 구축을 통한 혁신적인 업무 환경 조성</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                variants={item}
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">실행 가능한 인사이트</h3>
                  <p className="text-sm text-muted">GenAI 도입의 막연함을 넘어선 구체적인 실행 전략 제공</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={item}>
              <a href="#contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300">
                <span>AIon의 솔루션 알아보기</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Solution illustration */}
            <div className="relative">
              {/* Main image: Visualization of the 'Agent Boss' system */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary/70 w-full h-full relative">
                  <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <g fill="white" opacity="0.1">
                      <circle cx="400" cy="300" r="200" />
                    </g>
                    <g fill="none" stroke="white" strokeWidth="2" opacity="0.6">
                      <circle cx="400" cy="300" r="120" />
                      <circle cx="400" cy="300" r="180" strokeDasharray="10,10" />
                    </g>
                    
                    {/* Central node - Agent Boss */}
                    <g>
                      <circle cx="400" cy="300" r="60" fill="white" opacity="0.9" />
                      <text x="400" y="305" fontSize="18" textAnchor="middle" fill="#0A2540" fontWeight="bold">Agent Boss</text>
                    </g>
                    
                    {/* Connected AI and Human nodes */}
                    <g>
                      <circle cx="280" cy="200" r="40" fill="white" opacity="0.7" />
                      <text x="280" y="205" fontSize="14" textAnchor="middle" fill="#0A2540">AI Agent 1</text>
                      <path d="M310,230 L370,270" stroke="white" strokeWidth="2" />
                    </g>
                    
                    <g>
                      <circle cx="280" cy="400" r="40" fill="white" opacity="0.7" />
                      <text x="280" y="405" fontSize="14" textAnchor="middle" fill="#0A2540">AI Agent 2</text>
                      <path d="M310,380 L370,330" stroke="white" strokeWidth="2" />
                    </g>
                    
                    <g>
                      <circle cx="520" cy="200" r="40" fill="white" opacity="0.7" />
                      <text x="520" y="205" fontSize="14" textAnchor="middle" fill="#0A2540">Human 1</text>
                      <path d="M490,230 L430,270" stroke="white" strokeWidth="2" />
                    </g>
                    
                    <g>
                      <circle cx="520" cy="400" r="40" fill="white" opacity="0.7" />
                      <text x="520" y="405" fontSize="14" textAnchor="middle" fill="#0A2540">Human 2</text>
                      <path d="M490,380 L430,330" stroke="white" strokeWidth="2" />
                    </g>
                    
                    <text x="400" y="500" fontSize="20" textAnchor="middle" fill="white" opacity="0.9">Romi: 인간-AI 협업 시스템</text>
                  </svg>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-secondary/20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">평균 생산성 향상</p>
                    <p className="text-xl font-semibold text-primary">37%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
