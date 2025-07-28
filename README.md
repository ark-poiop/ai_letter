# AI NEWS INSIGHT

AI 기술과 시장 동향을 분석하는 전문 뉴스 플랫폼입니다.

## 🚀 주요 기능

- **마크다운 포스트 지원**: `.md` 파일로 포스트 작성
- **동적 콘텐츠 로딩**: Vite의 동적 import를 활용한 효율적인 파일 로딩
- **검색 및 필터링**: 제목, 내용, 카테고리, 태그 기반 검색
- **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험
- **CI 디자인 시스템**: 일관된 브랜딩과 시각적 통일성

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
├── pages/              # 페이지 컴포넌트
├── data/
│   ├── posts.ts        # 기존 하드코딩된 포스트 (선택사항)
│   └── markdown/       # 마크다운 포스트 파일들
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
├── lib/
│   └── markdown.ts     # 마크다운 처리 유틸리티
├── services/
│   └── postService.ts  # 포스트 데이터 서비스
└── ...
```

## ✍️ 새로운 포스트 추가하기

### 1. 마크다운 파일 생성

`src/data/markdown/` 디렉토리에 새로운 `.md` 파일을 생성합니다.

### 2. Frontmatter 작성

파일 상단에 YAML 형식의 메타데이터를 작성합니다:

```markdown
---
title: "포스트 제목"
excerpt: "포스트 요약 (한 줄 설명)"
category: "카테고리명"
date: "YYYY-MM-DD"
readTime: "N분"
slug: "unique-post-slug"
author: "작성자명" (선택사항)
tags: ["태그1", "태그2", "태그3"] (선택사항)
image: "/image-path.jpg" (선택사항)
---

# 포스트 내용

여기에 마크다운 콘텐츠를 작성합니다...

## 섹션 제목

- 목록 항목 1
- 목록 항목 2

### 하위 섹션

**굵은 텍스트**와 *기울임 텍스트*를 사용할 수 있습니다.

> 인용문도 지원됩니다.

```javascript
// 코드 블록도 지원됩니다
console.log("Hello, World!");
```

## 📋 필수 Frontmatter 필드

- `title`: 포스트 제목
- `excerpt`: 포스트 요약
- `category`: 카테고리 (예: "AI 트렌드", "머신러닝", "딥러닝")
- `date`: 작성일 (YYYY-MM-DD 형식)
- `readTime`: 예상 읽기 시간 (예: "5분", "10분")
- `slug`: 고유한 URL 슬러그 (영문, 하이픈 사용)

## 📋 선택적 Frontmatter 필드

- `author`: 작성자명
- `tags`: 태그 배열 (검색 및 필터링에 활용)
- `image`: 대표 이미지 경로

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 🎨 사용된 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Routing**: React Router DOM (HashRouter)
- **Markdown Processing**: gray-matter + remark
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🔧 주요 설정 파일

- `vite.config.ts`: Vite 설정 (마크다운 파일 처리 포함)
- `tailwind.config.ts`: Tailwind CSS 설정 (Typography 플러그인 포함)
- `package.json`: 프로젝트 의존성 및 스크립트

## 📝 마크다운 작성 가이드

### 지원되는 마크다운 문법

- **제목**: `#`, `##`, `###` 등
- **강조**: `**굵게**`, `*기울임*`, `~~취소선~~`
- **목록**: `-`, `*`, `1.` 등
- **링크**: `[텍스트](URL)`
- **이미지**: `![alt](이미지경로)`
- **코드**: `` `인라인 코드` ``, ```코드 블록```
- **인용**: `> 인용문`
- **테이블**: 표 형식 지원
- **체크리스트**: `- [ ]`, `- [x]`

### 스타일링 팁

- 제목은 계층적으로 사용하세요 (H1 → H2 → H3)
- 긴 텍스트는 적절히 단락을 나누세요
- 이미지와 코드 블록을 활용하여 가독성을 높이세요
- 태그는 검색에 활용되므로 관련성 높은 키워드를 사용하세요

## 🚀 배포

### GitHub Pages 배포

1. GitHub 저장소에 코드 푸시
2. `npm run deploy` 실행
3. GitHub 저장소 설정에서 Pages 소스를 `gh-pages` 브랜치로 설정

### 배포 URL

- **개발 환경**: `http://localhost:3000`
- **프로덕션**: `https://ark-poiop.github.io/ai_letter`

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/new-post`)
3. 마크다운 포스트를 추가하거나 개선사항을 적용합니다
4. 변경사항을 커밋합니다 (`git commit -am 'Add new post'`)
5. 브랜치에 푸시합니다 (`git push origin feature/new-post`)
6. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**AI NEWS INSIGHT** - AI 기술의 미래를 탐구하는 전문 플랫폼
