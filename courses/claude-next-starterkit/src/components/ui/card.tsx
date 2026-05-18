// Card 컴포넌트
// 콘텐츠를 시각적으로 그룹화하는 카드 UI입니다
// 여러 하위 컴포넌트로 구성된 컴파운드 컴포넌트 패턴을 사용합니다
//
// 사용 예시:
//   <Card>
//     <CardHeader>
//       <CardTitle>제목</CardTitle>
//       <CardDescription>설명</CardDescription>
//     </CardHeader>
//     <CardContent>본문 내용</CardContent>
//     <CardFooter>
//       <Button>확인</Button>
//     </CardFooter>
//   </Card>

import * as React from "react"
import { cn } from "@/lib/utils"

// 카드 전체를 감싸는 컨테이너
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  )
}

// 카드 상단 헤더 영역 (제목, 설명을 배치)
function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}

// 카드 제목
function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

// 카드 부제목 / 설명 텍스트
function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

// 카드 본문 콘텐츠 영역
function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  )
}

// 카드 하단 영역 (버튼 등 액션 요소 배치)
function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
