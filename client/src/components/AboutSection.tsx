import { motion } from "framer-motion";

export default function AboutSection() {
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
  
  const features = [
    {
      title: "전문적인 AI 전략 컨설팅",
      description: "기업의 니즈와 목표에 맞는 맞춤형 AI 통합 전략 수립"
    },
    {
      title: "혁신적인 '에이전트 보스' 기술",
      description: "인간과 AI의 이상적 협업을 위한 독자적인 기술 개발 및 구현"
    },
    {
      title: "포괄적인 조직 혁신 지원",
      description: "기술 도입을 넘어 조직 문화와 업무 방식의 전환을 위한 종합적 지원"
    }
  ];
  
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6"
              variants={item}
            >
              AIon Inc. 소개
            </motion.h2>
            <motion.p 
              className="text-muted mb-6"
              variants={item}
            >
              AIon Inc.는 인간과 AI 에이전트의 혁신적인 협업을 통해 기업의 디지털 전환을 지원하는 선도적인 기술 기업입니다. 우리는 단순한 AI 솔루션 제공을 넘어, '프론티어 기업'의 비전을 실현하고 '에이전트 보스' 중심의 새로운 조직 패러다임을 구축합니다.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={container}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={item}
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={item}
            >
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                AIon 팀과 상담하기
              </a>
              <a 
                href="#" 
                className="text-primary border border-primary/20 hover:border-primary/40 font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                회사 소개 자료 다운로드
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Company images */}
              <div className="space-y-4">
                {/* Image 1: Team collaboration */}
                <div className="rounded-xl overflow-hidden shadow-lg h-48 md:h-64 bg-gradient-to-br from-primary/70 to-secondary/70 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                {/* Image 2: Tech infrastructure */}
                <div className="rounded-xl overflow-hidden shadow-lg h-40 md:h-48 bg-gradient-to-tr from-primary/60 to-secondary/60 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                {/* Image 3: Innovation */}
                <div className="rounded-xl overflow-hidden shadow-lg h-40 md:h-48 bg-gradient-to-bl from-primary/60 to-accent/60 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                {/* Image 4: Leadership */}
                <div className="rounded-xl overflow-hidden shadow-lg h-48 md:h-64 bg-gradient-to-tl from-primary/70 to-accent/70 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
