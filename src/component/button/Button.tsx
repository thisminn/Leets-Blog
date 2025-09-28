import type { ButtonProps } from './ButtonType'
import { getButtonClasses } from './ButtonVariant' // 스타일 함수 import
export const Button = ({
  children,
  variant = 'filled',
  shape = 'round',
  colorScheme = 'primary',
  icon,
  disabled = false,
  ...props
}: ButtonProps) => {
  const className = getButtonClasses({
    variant,
    shape,
    colorScheme,
    disabled,
  })

  return (
    <button className={className} disabled={disabled} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  )
}
