# Tech Context for AIon_Replit

## Technologies Used
- **Frontend Framework**: Next.js (React, TypeScript) - 기존 Vite 기반 React에서 전환 예정
- **CSS Framework**: Tailwind CSS with Shadcn UI - 반응형 디자인 및 UI 컴포넌트 강화
- **Build Tool**: Next.js 내부 빌드 시스템 - 기존 Vite에서 전환
- **Backend**: Supabase - 데이터베이스 및 인증 기능 제공, 기존 Express 서버 대체
- **Hosting**: Vercel - Next.js 프로젝트에 최적화된 정적 호스팅 및 CI/CD 파이프라인

## Development Setup
- **IDE**: Visual Studio Code 사용 중
- **Version Control**: Git을 통한 버전 관리
- **Project Structure**: Next.js App Router 기반 구조로 전환 예정 (/app, /pages, /components 등)

## Technical Constraints
- **Budget**: 초기 스타트업 프로젝트로, 무료 또는 저비용 도구 및 서비스 우선 사용
- **Time**: 빠른 MVP 배포를 목표로, 개발 기간 제한
- **Compatibility**: 주요 브라우저(Chrome, Firefox, Safari) 및 디바이스(모바일, 태블릿, 데스크톱) 지원 필요

## Dependencies
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Supabase 클라이언트 라이브러리
- **Deployment**: Vercel CLI 및 플랫폼 관련 도구

## Tool Usage Patterns
- **Component Libraries**: Shadcn UI를 사용하여 Tailwind CSS 기반의 UI 컴포넌트 활용, 기존 Radix UI 컴포넌트와 통합
- **Testing**: 초기 버전에서는 수동 테스트 위주, 이후 단위 테스트 및 E2E 테스트 도입 검토
- **Deployment**: Vercel을 통한 CI/CD 파이프라인을 통한 자동 배포 설정 예정
