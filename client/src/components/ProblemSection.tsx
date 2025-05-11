import { motion } from "framer-motion";

export default function ProblemSection() {
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
    <section id="problem" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4"
              variants={item}
            >
              AI의 잠재력, 아직도 '뜬구름 잡는 이야기'에 머물러 있습니까?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted"
              variants={item}
            >
              많은 기업과 기관이 GenAI의 혁신을 꿈꾸지만, 실제 비즈니스에 적용할 명확한 솔루션과 실행 가능한 인사이트 부재로 어려움을 겪고 있습니다.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">문제 인식</h3>
            <p className="text-muted mb-4">
              AI가 모든 것을 바꿀 것이라는 이야기는 넘쳐나지만, 정작 '어떻게' 우리 조직에 적용하고, '무엇을' 통해 실질적인 가치를 창출할 수 있을지에 대한 명쾌한 답은 찾기 어렵습니다. AI 도입의 복잡성, 기존 업무 방식과의 충돌, ROI 불확실성... 혹시 이런 고민들이 혁신의 발목을 잡고 있지는 않습니까?
            </p>
            
            {/* Problem illustration */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden my-6">
              <div className="w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="transparent" />
                  <g fill="none" stroke="#0A2540" strokeWidth="1.5" opacity="0.6">
                    <path d="M100,225 L700,225" strokeDasharray="5,5" />
                    <path d="M400,50 L400,400" strokeDasharray="5,5" />
                  </g>
                  <g fill="#0A2540" opacity="0.8">
                    <circle cx="280" cy="150" r="50" opacity="0.2" />
                    <text x="280" y="155" fontSize="14" textAnchor="middle" fill="#0A2540">AI 기대</text>
                  </g>
                  <g fill="#FF7A00" opacity="0.8">
                    <circle cx="520" cy="300" r="50" opacity="0.2" />
                    <text x="520" y="305" fontSize="14" textAnchor="middle" fill="#0A2540">현실</text>
                  </g>
                  <g fill="none" stroke="#0A2540" strokeWidth="2">
                    <path d="M150,225 C200,100 250,100 300,150 C350,200 380,100 400,120 C420,140 450,300 500,300 C550,300 600,350 650,225" />
                  </g>
                  <text x="400" y="50" fontSize="18" textAnchor="middle" fill="#0A2540">기대치 vs 현실</text>
                  <text x="150" y="250" fontSize="12" textAnchor="middle" fill="#0A2540">시간</text>
                  <text x="400" y="420" fontSize="14" textAnchor="middle" fill="#0A2540">AI 도입 과정에서의 기대치와 현실 간의 격차</text>
                </svg>
              </div>
            </div>
          </motion.div>
          
          {/* Target-specific agitation cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {/* For Investors */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">투자자의 고민</h3>
              </div>
              <p className="text-sm text-muted">
                AI 혁신에 뒤처진 기업에 투자하고 계십니까? 매 순간 놓치는 기회비용이 기업 가치를 얼마나 잠식하고 있을까요? 경쟁사들이 AI로 시장을 재편하는 동안, 당신의 포트폴리오는 과거에 머물러 있지는 않습니까?
              </p>
            </motion.div>
            
            {/* For Government Officials */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold">정부 관계자의 과제</h3>
              </div>
              <p className="text-sm text-muted">
                국가 경쟁력 강화를 위한 AI 역량 개발 사업에도 불구하고 가시적인 성과가 부족하다고 느끼십니까? 정책과 실행 사이의 간극을 어떻게 해소할 수 있을까요? AI 지원 사업의 실질적 효용성을 높일 방법이 필요하지 않으신가요?
              </p>
            </motion.div>
            
            {/* For Future Clients */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold">기업의 도전</h3>
              </div>
              <p className="text-sm text-muted">
                수많은 AI 솔루션을 검토했지만, 조직에 어떻게 통합해야 할지 방향을 찾지 못하고 계십니까? AI 도입에 투자했음에도 기대했던 생산성과 혁신이 이루어지지 않고 있나요? 경쟁사가 AI로 앞서가는 동안, 귀사는 여전히 출발선에 머물러 있습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
