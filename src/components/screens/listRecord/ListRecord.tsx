import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import Record from '../record/Record'
import styles from './ListRecord.module.scss'
import { useEffect, useState } from 'react'
import FilterSelect from '../../ui/filterSelect/FilterSelect'
import { filterRecord } from '../../../store/listRecordSlice/listRecordSlice'
import DisplayCounter from '../../ui/displayCounter/DisplayCounter'

const ListRecord = () => {
  const dispatch = useAppDispatch()
  const listRecord = useAppSelector((state) => state.record.records)
  const filterList = useAppSelector((state) => state.record)
  const [selectedOption, setSelectedOption] = useState({ 'value': 'all', 'label': 'All' })

  useEffect(() => {
    dispatch(filterRecord({ 'status': selectedOption.label }))
  }, [selectedOption, listRecord])

  return (
    <div className={styles.record}>
      <div className={styles.filter}>
        <FilterSelect value={selectedOption} onChange={setSelectedOption as any} />
      </div>
      <div>
        {filterList.filterRecord.map((record) => <Record key={record.id} id={record.id} title={record.title} status={record.status}/>)}
      </div>
      <DisplayCounter counter={filterList.filterRecord} />
    </div>
  )
}

export default ListRecord
