import { SingleValue } from 'react-select'

export interface SelectType {
  value: string
  label: string
}

export interface FilterSelectTypes {
  value: SelectType
  onChange: (newValue: SingleValue<SelectType>) => void
}
