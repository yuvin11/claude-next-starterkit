// Label 컴포넌트
// 폼 입력 필드의 레이블입니다
// @radix-ui/react-label 기반으로 접근성(웹 접근성)을 자동으로 보장합니다
//
// 사용 예시:
//   <Label htmlFor="email">이메일</Label>
//   <Input id="email" type="email" />
//
// htmlFor와 Input의 id를 같은 값으로 연결하면
// 레이블 클릭 시 Input이 자동으로 포커스됩니다

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  // peer-disabled: 연결된 Input이 비활성화되면 Label도 흐리게 표시됩니다
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
