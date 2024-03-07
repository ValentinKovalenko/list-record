import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import Record from '../record/record'
import styles from './list-record.module.scss'
import { useEffect, useState } from 'react'
import FilterSelect from '../../ui/filterSelect/filter-select'
import { filterRecord } from '../../../store/listRecordSlice/list-record-slice'
import DisplayCounter from '../../ui/displayCounter/display-counter'
import { SelectType } from '../../ui/filterSelect/filter-select.types'

const ListRecord: React.FC = () => {
  const dispatch = useAppDispatch()
  const listRecord = useAppSelector((state) => state.record.records)
  const filterList = useAppSelector((state) => state.record)
  const [
    selectedOption,
    setSelectedOption,
  ] = useState<SelectType | null>({ 'value': 'all', 'label': 'All' })

  useEffect(() => {
    dispatch(filterRecord({ 'status': selectedOption?.label as string }))
  }, [selectedOption, listRecord, dispatch])

  return (
    <div className={styles.record}>
      <div className={styles.filter}>
        <FilterSelect
          value={selectedOption as SelectType}
          onChange={setSelectedOption}
        />
      </div>
      <div>
        {filterList.filterRecord.map((record) => <Record
          key={record.id}
          id={record.id}
          title={record.title}
          status={record.status}
        />)}
      </div>
      <DisplayCounter counter={filterList.filterRecord} />
    </div>
  )
}

export default ListRecord
