import { InputHTMLAttributes } from 'react'
import {
  FieldError,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form'

export interface IFieldProps {
  name: string
  placeholder: string
  errors?: FieldError
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  maxLength: number
  required: boolean
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
