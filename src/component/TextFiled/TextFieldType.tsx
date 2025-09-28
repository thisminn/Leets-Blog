export type TextFieldVariant = 'default' | 'input' | 'click' | 'disabled'

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TextFieldVariant
}
