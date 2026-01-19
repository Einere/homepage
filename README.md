# Einere's Homepage

Notion을 CMS로 활용하는 개인 블로그입니다. Notion에서 작성한 글이 자동으로 블로그에 반영됩니다.

**[Live Demo](https://einere.me)**

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Notion](https://img.shields.io/badge/Notion_API-000000?style=flat-square&logo=notion&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## Features

- **Notion as CMS** - Notion 데이터베이스를 콘텐츠 소스로 활용
- **Custom Notion Renderer** - Notion 블록을 React 컴포넌트로 렌더링하는 자체 패키지
- **Tag Filtering** - 태그 기반 글 필터링
- **Search** - 블로그 내 검색 기능
- **Infinite Scroll** - React Query 기반 무한 스크롤
- **Comments** - Giscus를 활용한 GitHub 기반 댓글
- **ISR** - 30분 주기 정적 재생성으로 빠른 로딩과 최신 콘텐츠 유지

## Architecture

```
homepage/
├── src/app/                    # Next.js App Router
│   ├── (records)/             # 글 목록 라우트 그룹
│   ├── (record)/              # 글 상세 라우트 그룹
│   ├── api/                   # API Routes
│   └── lib/                   # Notion API 클라이언트
│
└── packages/
    └── notion-renderer/       # Notion 블록 렌더링 패키지
```

### Monorepo with pnpm workspaces

`@homepage/notion-renderer` 패키지가 Notion 블록 타입별 렌더링을 담당합니다. 헤딩, 문단, 코드 블록, 이미지, 토글 등 다양한 Notion 블록 타입을 지원합니다.

## Getting Started

```bash
# Install dependencies
pnpm install

# Set environment variables
cp .env.example .env.local
# NEXT_NOTION_API_AUTH_TOKEN=your_notion_api_token
# NEXT_NOTION_API_DATA_SOURCE_ID=your_notion_database_id

# Run development server (with Turbopack)
pnpm dev
```

## License

MIT