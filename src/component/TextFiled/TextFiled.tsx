import React from 'react'
import type { TextFieldProps } from './TextFieldType'
import { textFieldVariants } from './TextFiledVatiant'

export const TextField: React.FC<TextFieldProps> = ({
  variant = 'default',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyle = 'w-full px-3 py-2'

  return (
    <input
      className={`${baseStyle} ${textFieldVariants[variant]} ${className}`}
      disabled={disabled || variant === 'disabled'}
      {...props}
    />
  )
}
