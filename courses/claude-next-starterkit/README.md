# Next.js 스타터킷

Next.js v15 + TypeScript + TailwindCSS v4 + shadcn/ui + lucide-react 기반의 웹 개발 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| [Next.js](https://nextjs.org) | v15 | React 풀스택 프레임워크 (App Router) |
| [TypeScript](https://www.typescriptlang.org) | v5 | 타입 안전한 JavaScript |
| [TailwindCSS](https://tailwindcss.com) | v4 | 유틸리티 기반 CSS 프레임워크 |
| [shadcn/ui](https://ui.shadcn.com) | latest | 접근성 높은 UI 컴포넌트 라이브러리 |
| [lucide-react](https://lucide.dev) | latest | 아이콘 라이브러리 |

## 시작하기

### 요구사항

- Node.js **20.9** 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/yuvin11/claude-next-starterkit.git
cd claude-next-starterkit

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

### 환경 변수 설정

```bash
cp .env.local.example .env.local
```

`.env.local` 파일을 열어 필요한 값을 입력하세요.

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css       # TailwindCSS v4 설정 + CSS 변수 (라이트/다크 모드)
│   ├── layout.tsx        # 루트 레이아웃 (Geist 폰트, 메타데이터)
│   └── page.tsx          # 메인 페이지 (컴포넌트 쇼케이스)
├── components/
│   └── ui/               # shadcn/ui 컴포넌트
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── hooks/
│   └── use-toast.ts      # 커스텀 훅 예시
├── lib/
│   └── utils.ts          # cn() 유틸리티 함수
└── types/
    └── index.ts          # 공통 TypeScript 타입
```

## 포함된 컴포넌트

### Button
6가지 variant와 4가지 size를 지원합니다.

```tsx
<Button variant="default">기본</Button>
<Button variant="secondary">보조</Button>
<Button variant="outline">외곽선</Button>
<Button variant="ghost">고스트</Button>
<Button variant="link">링크</Button>
<Button variant="destructive">삭제</Button>
```

### Card
콘텐츠를 그룹화하는 컴파운드 컴포넌트입니다.

```tsx
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>본문</CardContent>
  <CardFooter>
    <Button>확인</Button>
  </CardFooter>
</Card>
```

### Badge
상태, 카테고리, 버전 표시에 사용합니다.

```tsx
<Badge>기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="outline">외곽선</Badge>
<Badge variant="destructive">오류</Badge>
```

### Input + Label
폼 입력 필드와 레이블을 조합합니다.

```tsx
<Label htmlFor="email">이메일</Label>
<Input id="email" type="email" placeholder="example@email.com" />
```

## 스크립트

```bash
npm run dev        # 개발 서버 실행 (Turbopack)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 검사
npm run lint:fix   # ESLint 자동 수정
```

## TailwindCSS v4 주요 변경사항

v3에서 v4로 업그레이드 시 달라진 점입니다.

| 항목 | v3 | v4 |
|------|----|----|
| CSS 임포트 | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| 설정 파일 | `tailwind.config.ts` 필요 | 불필요 — CSS의 `@theme` 사용 |
| PostCSS 플러그인 | `tailwindcss + autoprefixer` | `@tailwindcss/postcss` 하나만 사용 |

## 다음 단계

필요에 따라 아래 기능을 추가할 수 있습니다.

```bash
# 다크모드
npm install next-themes

# 추가 shadcn/ui 컴포넌트
npx shadcn@latest add dialog
npx shadcn@latest add sonner
npx shadcn@latest add table

# 폼 유효성 검사
npm install react-hook-form zod
```

## 라이선스

MIT
