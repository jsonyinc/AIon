import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        {/* Abstract tech pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="h-full w-full bg-primary/10 overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#0A2540" strokeWidth="2">
                <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764"/>
                <path d="M320 340L131 430 40 599 295 764 731 737M870 300H131"/>
                <path d="M870 300L509 114 320 340 50 114D131 430 509 114M509 114L427 339"/>
                <path d="M427 339L766 475M731 737L766 475"/>
                <circle cx="320" cy="340" r="10"/>
                <circle cx="731" cy="737" r="10"/>
                <circle cx="766" cy="475" r="10"/>
                <circle cx="427" cy="339" r="10"/>
                <circle cx="509" cy="114" r="10"/>
                <circle cx="295" cy="764" r="10"/>
                <circle cx="40" cy="599" r="10"/>
                <circle cx="131" cy="430" r="10"/>
                <circle cx="870" cy="300" r="10"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI 혁명, RomiⒻ로 현실로: '에이전트 보스'가 당신의 비즈니스를 미래로 이끈다.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-primary/80 mb-8 md:mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            인간과 AI의 완벽한 시너지. '에이전트 보스' 시스템이 AI 혁신의 막연함을 걷어내고, 투자자와 기업의 실질적 성장을 견인합니다.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AIon Inc.는 단순 AI 도입을 넘어, 인간과 AI가 시너지를 내는 '프론티어 기업'의 새 기준을 제시합니다. RomiⒻ는 귀사의 AI 혁신 여정을 이끌 '에이전트 보스' 기반 솔루션으로, 막연한 기대감을 넘어선 실질적 성과와 미래 비전을 선사합니다.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              RomiⒻ 솔루션, 지금 바로 경험하세요!
            </a>
            <a 
              href="#frontier" 
              className="text-primary border border-primary/20 hover:border-primary/40 font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              '프론티어 기업' 비전 살펴보기
            </a>
          </motion.div>
        </div>
        
        {/* Hero image */}
        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* A stylish representation of human collaborators working with AI agents */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0A2540" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00C49A" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad)" />
                <g fill="white" opacity="0.2">
                  <circle cx="400" cy="450" r="150" />
                  <circle cx="800" cy="350" r="200" />
                  <circle cx="1200" cy="450" r="150" />
                </g>
                <g fill="none" stroke="white" strokeWidth="2" opacity="0.5">
                  <path d="M400,450 L800,350 L1200,450" />
                  <path d="M400,450 C500,300 700,300 800,350 C900,400 1100,400 1200,450" />
                </g>
                <g fill="white" opacity="0.8">
                  <circle cx="400" cy="450" r="10" />
                  <circle cx="800" cy="350" r="15" />
                  <circle cx="1200" cy="450" r="10" />
                </g>
                <text x="800" y="520" fontSize="40" fill="white" textAnchor="middle">Agent Boss</text>
                <text x="400" y="400" fontSize="25" fill="white" textAnchor="middle">AI Agent 1</text>
                <text x="1200" y="400" fontSize="25" fill="white" textAnchor="middle">AI Agent 2</text>
                <text x="600" y="300" fontSize="25" fill="white" textAnchor="middle">Human</text>
                <text x="1000" y="300" fontSize="25" fill="white" textAnchor="middle">Human</text>
              </svg>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -right-4 -top-4 bg-white rounded-full px-4 py-2 shadow-lg border border-secondary/20 hidden md:flex items-center gap-2">
            <span className="text-secondary font-semibold text-sm">RomiⒻ</span>
            <span className="text-xs text-primary/60">미래 혁신 솔루션</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
