// 프로젝트 공통 TypeScript 타입 정의
// 여러 파일에서 재사용할 타입을 여기에 모아둡니다

// React의 기본 타입 재내보내기 (다른 파일에서 편리하게 import 가능)
export type { ReactNode } from "react"

// className prop을 받는 컴포넌트에 사용하는 타입
export interface WithClassName {
  className?: string
}

// children prop을 받는 컴포넌트에 사용하는 타입
export interface WithChildren {
  children?: React.ReactNode
}

// API 응답의 공통 형태를 정의하는 제네릭 타입
// 예: ApiResponse<User>, ApiResponse<Post[]>
export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}

/**
 * Next.js v15 페이지 컴포넌트 Props 타입
 *
 * ⚠️ v15 중요 변경사항:
 * params와 searchParams가 이제 Promise입니다. await로 받아야 합니다.
 *
 * 올바른 사용법:
 *   export default async function Page({ params }: { params: Promise<{ id: string }> }) {
 *     const { id } = await params
 *   }
 */
export interface PageProps {
  params: Promise<Record<string, string>>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}
