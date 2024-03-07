import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'

export interface IFieldProps {
  name: string
  placeholder: string
  errors?: any
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  maxLength: number
  required: boolean
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
