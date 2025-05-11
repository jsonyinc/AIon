import { motion } from "framer-motion";

export default function TestimonialSection() {
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
  
  const testimonials = [
    {
      quote: "처음에는 단순히 또 하나의 AI 솔루션이라고 생각했습니다. 그러나 '에이전트 보스' 시스템은 완전히 달랐습니다. 우리 팀의 모든 업무 방식이 혁신적으로 변화했고, 불과 3개월 만에 프로젝트 완료 시간이 45% 단축되었습니다. 이제 AI는 우리 조직의 필수적인 일원입니다.",
      name: "김영준",
      position: "테크노바 솔루션즈 CTO"
    },
    {
      quote: "수많은 AI 투자가 실질적인 ROI로 이어지지 않아 고민이었습니다. AIon의 '에이전트 보스' 시스템은 도입 첫 주부터 명확한 가치를 창출했습니다. 의사결정 속도는 62% 향상되었고, 데이터 분석의 정확도는 83%까지 개선되었습니다. 무엇보다 직원들이 AI와 함께 일하는 것을 즐기게 되었습니다.",
      name: "이수진",
      position: "글로벌 이노베이션 그룹 CEO"
    }
  ];
  
  const metrics = [
    { label: "평균 생산성 향상", value: "37%" },
    { label: "의사결정 속도", value: "42%" },
    { label: "ROI 회수 기간", value: "5개월" },
    { label: "고객 만족도", value: "91%" }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
            '프론티어 기업'의 성공 사례
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            AIon의 '에이전트 보스' 시스템을 도입한 기업들의 실제 경험과 성과를 확인하세요
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-card relative"
              variants={item}
            >
              <div className="text-secondary text-6xl absolute -top-4 left-4 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-muted mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary/40" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Growth metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-5 text-center shadow-card"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h4 className="text-sm text-muted mb-1">{metric.label}</h4>
              <p className="text-3xl font-display font-bold text-secondary">{metric.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
