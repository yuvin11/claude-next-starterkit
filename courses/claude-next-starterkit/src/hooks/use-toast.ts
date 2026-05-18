// 커스텀 훅 예시: 브라우저 알림 (데모용)
//
// 더 나은 토스트 알림이 필요하다면 shadcn의 Sonner 컴포넌트를 추가하세요:
//   npx shadcn@latest add sonner
//
// 사용 예시 (sonner 설치 후):
//   import { toast } from "sonner"
//   toast("저장되었습니다!")
//   toast.error("오류가 발생했습니다.")

export function useAlert() {
  // 브라우저 기본 alert 창을 띄우는 함수
  const show = (message: string) => {
    if (typeof window !== "undefined") {
      window.alert(message)
    }
  }

  return { show }
}
