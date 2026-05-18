// Button 컴포넌트
// CVA(class-variance-authority)로 여러 스타일 변형을 타입 안전하게 관리합니다

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// 버튼의 모든 스타일 변형을 한 곳에서 정의합니다
const buttonVariants = cva(
  // 기본 스타일: 모든 변형에 공통으로 적용됩니다
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      // variant: 버튼의 시각적 스타일
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // size: 버튼의 크기
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9", // 아이콘만 있는 정사각형 버튼
      },
    },
    // 아무것도 지정하지 않았을 때 적용되는 기본값
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // asChild: true이면 <button> 대신 자식 요소를 렌더링합니다
  // 예: <Button asChild><Link href="/about">소개</Link></Button>
  asChild?: boolean
}

// forwardRef: 부모 컴포넌트가 이 버튼의 DOM 요소에 직접 접근할 수 있게 합니다
// (폼 라이브러리, 포커스 관리 등에 필요)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
