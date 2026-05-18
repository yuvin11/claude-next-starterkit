"use client"

// ThemeProvider — next-themes의 다크모드 컨텍스트를 앱 전체에 제공합니다
// "use client"가 필요한 이유: next-themes는 브라우저의 localStorage와
// prefers-color-scheme을 읽어야 하기 때문에 서버에서 실행될 수 없습니다

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
