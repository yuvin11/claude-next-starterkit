// shadcn/ui 핵심 유틸리티 함수
// clsx와 tailwind-merge를 결합하여 className을 안전하게 합칩니다

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn() - className을 합치는 유틸리티 함수
 *
 * 사용 예시:
 *   cn("px-4 py-2", isActive && "bg-blue-500", "text-white")
 *   → isActive가 true면: "px-4 py-2 bg-blue-500 text-white"
 *   → isActive가 false면: "px-4 py-2 text-white"
 *
 * tailwind-merge 덕분에 충돌하는 클래스는 자동으로 해결됩니다:
 *   cn("px-4", "px-8") → "px-8" (나중 값이 앞 값을 덮어씁니다)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
