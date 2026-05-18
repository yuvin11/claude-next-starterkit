"use client"

// ThemeToggle — 라이트/다크 모드를 전환하는 버튼 컴포넌트
// "use client"가 필요한 이유: 버튼 클릭 이벤트와 현재 테마 상태를 다뤄야 합니다

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // useTheme: 현재 테마(theme)와 테마 변경 함수(setTheme)를 제공합니다
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      // 현재 테마가 다크면 라이트로, 라이트면 다크로 전환
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="테마 전환"
    >
      {/* Sun: 다크 모드일 때 표시 (라이트로 전환 안내) */}
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/* Moon: 라이트 모드일 때 표시 (다크로 전환 안내) */}
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
