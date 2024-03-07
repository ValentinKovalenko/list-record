import React, { FC } from 'react'
import Select from 'react-select'
import { options } from '../../../constants/constants'
import { FilterSelectTypes } from './filterSelect.types'

const FilterSelect:FC<FilterSelectTypes> = ({ value, onChange }) => {
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption)
  }

  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      className='w-1/6'
    />
  )
}

export default FilterSelect
