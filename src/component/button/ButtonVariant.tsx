import type { ButtonVariant, ButtonShape, ButtonColorScheme } from './ButtonType'

interface StyleProps {
  variant: ButtonVariant
  shape: ButtonShape
  colorScheme: ButtonColorScheme
  disabled: boolean
}

export const getButtonClasses = ({ variant, shape, colorScheme, disabled }: StyleProps) => {
  const baseStyle =
    'inline-flex items-center justify-center font-normal text-sm leading-[1.6] tracking-[-0.5%] gap-1 '

  const shapeStyle = {
    round: 'rounded-full px-3 py-2 gap-1',
    rectangle: 'px-2 pt-0.5 pb-1 gap-1 border-none hover:bg-[#E6E6E6]',
  }[shape]

  const variantStyle =
    {
      filled: {
        primary: 'bg-[#FFFFFF] text-[#00A1FF] border border-[#00A1FF] hover:bg-[#99d9f8]',
        secondary: 'bg-[#FFFFFF] text-[#909090] border border-[#909090] hover:bg-[#E6E6E6]',
        dark: 'bg-[#111112] text-[#FFFFFF] border border-[#111112] hover:text-[#909090]',
      },
      outline: {
        primary: 'bg-[#FFFFFF] text-[#00A1FF] hover:bg-[#99d9f8]',
        secondary: 'bg-[#FFFFFF] text-[#909090] hover:bg-[#E6E6E6]',
      },
    }[variant][colorScheme] || ''

  const disabledStyle = disabled ? 'opacity-40 cursor-not-allowed' : ''

  return [baseStyle, shapeStyle, variantStyle, disabledStyle].join(' ').trim()
}
