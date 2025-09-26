import type { ReactNode } from 'react' // React에 렌더링할 수 있는 모든 값의 타입

// 버튼 스타일 종류
export type ButtonVariant = 'filled' | 'outline' | 'ghost'
// 버튼 모양 종류
export type ButtonShape = 'round' | 'rectangle'
// 버튼 색상 테마
export type ButtonColorScheme = 'primary' | 'secondary' | 'dark' | 'light'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  shape?: ButtonShape
  colorScheme?: ButtonColorScheme
  icon?: ReactNode
  disabled?: boolean
  onClick?: () => void
}
