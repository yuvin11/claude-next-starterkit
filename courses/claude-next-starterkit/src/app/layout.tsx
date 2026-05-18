// 루트 레이아웃 — 모든 페이지에 공통으로 적용되는 최상위 컴포넌트
// Next.js App Router에서 layout.tsx는 페이지 이동 시 새로고침 없이 유지됩니다

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Geist 폰트 설정 (Vercel이 만든 개발자 친화적 폰트)
// variable: CSS 변수 이름 → globals.css의 --font-geist-sans와 연결됩니다
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

// 코드 블록 등에 사용하는 고정폭(모노스페이스) 폰트
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// 메타데이터 — 브라우저 탭 제목, SEO, 소셜 공유에 사용됩니다
export const metadata: Metadata = {
  title: {
    default: "Next.js 스타터킷",
    // %s 자리에 각 페이지의 제목이 들어갑니다
    // 예: "로그인 | Next.js 스타터킷"
    template: "%s | Next.js 스타터킷",
  },
  description:
    "Next.js v15, TypeScript, TailwindCSS v4, shadcn/ui로 만든 웹 개발 스타터킷",
}

// RootLayout — children에는 각 페이지 컴포넌트가 들어옵니다
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // lang="ko": 스크린 리더와 검색엔진에 한국어 페이지임을 알립니다
    // suppressHydrationWarning: 다크모드 라이브러리 사용 시 경고를 방지합니다
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* attribute="class": 다크모드 시 <html class="dark">로 전환됩니다 */}
        {/* defaultTheme="system": 기본값으로 OS 설정을 따릅니다 */}
        {/* enableSystem: OS 다크모드 설정을 자동 감지합니다 */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
