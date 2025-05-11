import { motion } from "framer-motion";

export default function BenefitsSection() {
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
  
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "생산성 37% 향상",
      description: "'에이전트 보스' 시스템의 도입만으로 평균 37%의 업무 생산성 향상을 경험하세요. 반복적인 업무는 AI에게 위임하고, 인간은 창의적이고 전략적인 영역에 집중할 수 있습니다.",
      metric: "37% ↑",
      width: "37%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "의사결정 시간 42% 단축",
      description: "'에이전트 보스'의 실시간 데이터 분석과 인사이트 제공으로 복잡한 의사결정 과정이 간소화됩니다. 빠르고 정확한 결정으로 비즈니스 기회를 선점하세요.",
      metric: "42% ↓",
      width: "42%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "팀 협업 효율성 55% 개선",
      description: "'에이전트 보스' 중심의 협업 시스템은 팀 간 커뮤니케이션 장벽을 허물고, 정보 공유와 협업 프로세스를 혁신적으로 개선합니다. 분산된 팀도 마치 한 공간에서 일하는 듯한 경험을 제공합니다.",
      metric: "55% ↑",
      width: "55%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "ROI 회수 기간 60% 단축",
      description: "기존 AI 도입 프로젝트 대비 투자 회수 기간을 획기적으로 단축합니다. AIon의 '에이전트 보스' 시스템은 도입 첫날부터 즉각적인 가치를 창출하며, 평균 5개월 내 투자 비용을 완전히 회수합니다.",
      metric: "60% ↓",
      width: "60%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "직원 만족도 48% 향상",
      description: "반복적이고 지루한 업무에서 해방된 직원들은 더 창의적이고 보람 있는 업무에 집중할 수 있게 됩니다. '에이전트 보스'와의 협업은 직원들에게 새로운 수준의 업무 만족도와 성취감을 선사합니다.",
      metric: "48% ↑",
      width: "48%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "품질 및 정확도 62% 향상",
      description: "인간의 창의성과 AI의 정밀함이 결합된 '에이전트 보스' 시스템은 업무 결과물의 품질과 정확도를 획기적으로 개선합니다. 휴먼 에러는 감소하고, 일관된 고품질 산출물을 기대할 수 있습니다.",
      metric: "62% ↑",
      width: "62%"
    }
  ];
  
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
            RomiⒻ가 제공하는 핵심 혜택
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            AIon의 '에이전트 보스' 시스템은 AI 도입의 복잡성을 해소하고, 구체적이고 측정 가능한 가치를 제공합니다
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col"
              variants={item}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted mb-4 flex-grow">
                {benefit.description}
              </p>
              <div className="mt-auto pt-4 border-t border-primary/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary/60">{benefit.title.split(' ')[0]} {benefit.title.split(' ')[1]}</span>
                  <span className="text-sm font-semibold">{benefit.metric}</span>
                </div>
                <div className="w-full bg-primary/10 h-2 rounded-full mt-2">
                  <div 
                    className="bg-secondary h-2 rounded-full"
                    style={{ width: benefit.width }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
