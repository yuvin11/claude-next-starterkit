// 메인 페이지 — 스타터킷의 모든 컴포넌트를 시연하는 쇼케이스 페이지입니다
// 이 파일을 참고하여 새로운 페이지를 만들어 보세요

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Rocket,
  Star,
  Heart,
  Zap,
  Code2,
  Palette,
  Package,
  ArrowRight,
  Github,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* ===== 히어로 섹션 ===== */}
      <section className="container mx-auto px-4 py-24 text-center">
        {/* 상단 뱃지 */}
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="gap-1.5 text-sm px-4 py-1.5">
            <Zap className="size-3.5" />
            Next.js v15 + TailwindCSS v4
          </Badge>
        </div>

        {/* 메인 제목 */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          웹 개발을 빠르게
          <br />
          <span className="text-muted-foreground">시작하는 스타터킷</span>
        </h1>

        {/* 설명 */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          TypeScript, TailwindCSS v4, shadcn/ui로 구성된 프로덕션 레디 스타터킷입니다.
          설치 후 바로 개발을 시작할 수 있습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Rocket className="size-4" />
            시작하기
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Github className="size-4" />
            GitHub 보기
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ===== 기술 스택 카드 섹션 ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-3">기술 스택</h2>
        <p className="text-center text-muted-foreground mb-10">
          검증된 최신 기술로 구성되었습니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Next.js 카드 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="size-5 text-primary" />
                </div>
                <Badge>v15</Badge>
              </div>
              <CardTitle>Next.js</CardTitle>
              <CardDescription>
                App Router, Server Components, Turbopack으로 더 빠른 개발 경험
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• App Router 기반 파일 시스템 라우팅</li>
                <li>• React Server Components (RSC)</li>
                <li>• Turbopack 기본 번들러</li>
              </ul>
            </CardContent>
          </Card>

          {/* TailwindCSS 카드 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Palette className="size-5 text-primary" />
                </div>
                <Badge variant="secondary">v4</Badge>
              </div>
              <CardTitle>TailwindCSS</CardTitle>
              <CardDescription>
                CSS 기반 설정으로 더 빠르고 직관적인 스타일링
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• 설정 파일 없이 CSS만으로 구성</li>
                <li>• @theme 블록으로 테마 커스터마이징</li>
                <li>• v3 대비 5배 빠른 빌드 속도</li>
              </ul>
            </CardContent>
          </Card>

          {/* shadcn/ui 카드 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Package className="size-5 text-primary" />
                </div>
                <Badge variant="outline">UI</Badge>
              </div>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>
                복사-붙여넣기 방식의 접근성 높은 컴포넌트 라이브러리
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Radix UI 기반 웹 접근성 보장</li>
                <li>• 완전한 커스터마이징 가능</li>
                <li>• TypeScript 완벽 지원</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Button 컴포넌트 쇼케이스 ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Button</h2>
        <p className="text-muted-foreground mb-8">
          6가지 variant와 4가지 size를 지원합니다
        </p>

        <div className="grid gap-6">
          {/* Variant */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                Variant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>

          {/* Size */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Star className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 아이콘 + 비활성화 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                With Icon / Disabled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button className="gap-2">
                  <Heart className="size-4" />
                  좋아요
                </Button>
                <Button variant="outline" className="gap-2">
                  <Code2 className="size-4" />
                  코드 보기
                </Button>
                <Button disabled>비활성화</Button>
                <Button variant="outline" disabled>
                  비활성화 (Outline)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Badge 컴포넌트 쇼케이스 ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Badge</h2>
        <p className="text-muted-foreground mb-8">
          상태, 카테고리, 버전 표시에 사용합니다
        </p>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge className="gap-1">
                <Star className="size-3" />
                Featured
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <div className="size-2 rounded-full bg-green-500" />
                활성
              </Badge>
              <Badge variant="outline">v1.0.0</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== 폼 컴포넌트 쇼케이스 ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Form 컴포넌트</h2>
        <p className="text-muted-foreground mb-8">
          Input과 Label을 조합하여 폼을 만듭니다
        </p>

        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>계정 정보를 입력해 주세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 이메일 입력 */}
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            {/* 비밀번호 입력 */}
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="8자 이상 입력하세요"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button className="w-full">로그인</Button>
            <Button variant="outline" className="w-full">
              회원가입
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* ===== 다음 단계 안내 섹션 ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">다음 단계</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">컴포넌트 추가</CardTitle>
              <CardDescription>shadcn/ui 컴포넌트를 더 추가하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                npx shadcn@latest add dialog
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">다크모드 추가</CardTitle>
              <CardDescription>next-themes로 다크모드를 구현하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                npm install next-themes
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">폼 유효성 검사</CardTitle>
              <CardDescription>React Hook Form + Zod를 추가하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                npm install react-hook-form zod
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">토스트 알림</CardTitle>
              <CardDescription>Sonner로 토스트 알림을 추가하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                npx shadcn@latest add sonner
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== 푸터 ===== */}
      <footer className="border-t mt-8">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Next.js v15 스타터킷 · TypeScript · TailwindCSS v4 · shadcn/ui ·
            lucide-react
          </p>
        </div>
      </footer>
    </main>
  )
}
