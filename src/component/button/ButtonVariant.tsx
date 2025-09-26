import type { ButtonVariant, ButtonShape, ButtonColorScheme } from './ButtonType'

interface StyleProps {
  variant: ButtonVariant
  shape: ButtonShape
  colorScheme: ButtonColorScheme
  disabled: boolean
}

export const getButtonClasses = ({ variant, shape, colorScheme, disabled }: StyleProps) => {
  const baseStyle = 'inline-flex items-center justify-center gap-2 transition-colors'

  const shapeStyle = {
    round: 'rounded-full px-3 py-2 gap-1',
    rectangle: 'rounded-md px-2 py-1 gap-1',
  }[shape]

  const variantStyle =
    {
      filled: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        dark: 'bg-black text-white hover:bg-gray-800',
        light: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50',
      },
      outline: {
        primary: 'border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50',
        secondary: 'border border-gray-400 text-gray-500 bg-transparent hover:bg-gray-100',
      },
      ghost: {
        secondary: 'text-gray-500 bg-transparent hover:bg-gray-100',
      },
    }[variant][colorScheme] || ''

  const disabledStyle = disabled ? 'opacity-40 cursor-not-allowed' : ''

  return [baseStyle, shapeStyle, variantStyle, disabledStyle].join(' ').trim()
}
