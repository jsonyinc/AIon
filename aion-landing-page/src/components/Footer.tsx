"use client";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AION</h3>
            <p className="text-white/80">AI 기술로 비즈니스 혁신을 이끄는 선두주자</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-secondary">AI 분석</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary">프로세스 자동화</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary">컨설팅</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">리소스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-secondary">블로그</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary">케이스 스터디</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary">백서</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-white/80 hover:text-secondary">문의하기</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary">지원</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} AION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
