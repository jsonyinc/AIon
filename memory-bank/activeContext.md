# Active Context for AIon_Replit

## Current Focus
- AION 랜딩 페이지 개발 완료
- Supabase RLS 정책 설정 문제 해결
- 새로운 프로젝트로 전환 준비

## Recent Changes
- 2025년 5월 12일: Memory Bank 폴더 및 초기 파일 생성 (`projectbrief.md`, `productContext.md`)
- 2025년 5월 12일: 랜딩 페이지 구조 및 콘텐츠 전략 수립
- 2025년 5월 12일: 시각적 스타일 가이드 분석 및 적용 계획 수립
- 2025년 5월 12일: 기술 스택 전환 계획 수립 (Next.js, Tailwind CSS with Shadcn UI, Vercel, Supabase)
- 2025년 5월 13일: RomiⒻ 시각적 스타일 가이드에 맞춰 모든 주요 컴포넌트 업데이트
- 2025년 5월 13일: Supabase 백엔드 설정 및 연결 테스트 성공
- 2025년 5월 13일: 문의 양식 데이터를 `contacts` 테이블에 저장하는 기능 구현
- 2025년 5월 13일: 불필요한 테스트 코드 제거
- 2025년 5월 13일: 프로젝트 파일 GitHub 저장소 푸시 완료 (`https://github.com/jsonyinc/AIon.git`)

## Next Steps
1. Supabase 대시보드에서 `contacts` 테이블의 RLS 정책 설정 (`anon` 역할에 대한 `INSERT` 권한 부여)
2. 새로운 프로젝트로 전환 준비 및 현재 컨텍스트 저장

## Active Decisions and Considerations
- Next.js를 사용하여 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 활용
- Supabase를 백엔드로 사용하여 데이터베이스 및 인증 기능 통합
- Shadcn UI를 통해 Tailwind CSS 기반의 UI 컴포넌트 활용
- Vercel을 통한 배포 및 CI/CD 파이프라인 설정
- Supabase RLS 정책 설정으로 익명 사용자 데이터 삽입 문제 해결 필요

## Important Patterns and Preferences
- 반응형 디자인을 우선시하여 모바일 및 데스크톱 사용자 모두에게 최적화
- 간결하고 명확한 UI/UX를 유지
- 빠른 로딩 속도를 위한 최적화된 이미지 및 코드 사용
- 시각적 스타일 가이드에 따라 신뢰, 혁신, 전문성을 전달하는 디자인 적용 (네이비, 청록색, 오렌지 색상 팔레트 등)

## Learnings and Project Insights
- 초기 설정 단계에서 기술 스택 전환 계획이 중요함을 확인
- 시각적 스타일 가이드와 콘텐츠 전략의 조화가 전환율 극대화에 필수적임을 인지
- Supabase 연결 테스트 중 다양한 방법 시도 후 `contacts` 테이블 쿼리로 성공
- RLS 정책 설정 오류로 익명 사용자 데이터 삽입 문제 발생, 대시보드에서 정책 설정 필요
