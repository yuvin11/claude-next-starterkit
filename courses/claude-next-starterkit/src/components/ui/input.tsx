// Input 컴포넌트
// HTML <input> 요소에 shadcn/ui 스타일을 적용한 버전입니다
//
// 사용 예시:
//   <Input type="text" placeholder="이름을 입력하세요" />
//   <Input type="email" placeholder="이메일" />
//   <Input type="password" placeholder="비밀번호" />

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// forwardRef: 폼 라이브러리(React Hook Form 등)와 함께 사용할 때 필요합니다
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // 기본 레이아웃
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          // 플레이스홀더 텍스트 색상
          "placeholder:text-muted-foreground",
          // 포커스(클릭) 시 스타일
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          // 비활성화 상태 스타일
          "disabled:cursor-not-allowed disabled:opacity-50",
          // 파일 선택 input 스타일
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
