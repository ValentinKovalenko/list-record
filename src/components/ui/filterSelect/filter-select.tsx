import React, { FC } from 'react'
import Select from 'react-select'
import { options } from '../../../constants/constants'
import { FilterSelectTypes, SelectType } from './filter-select.types'

const FilterSelect:FC<FilterSelectTypes> = ({ value, onChange }) => {
  const handleChange = (selectedOption: SelectType):void => {
    onChange(selectedOption)
  }

  return (
    <Select
      value={value}
      onChange={handleChange as ()=> void}
      options={options}
      className='w-1/6'
    />
  )
}

export default FilterSelect
