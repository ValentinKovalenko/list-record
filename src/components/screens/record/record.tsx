import styles from './record.module.scss'
import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { updateRecord } from '../../../store/listRecordSlice/list-record-slice'
import { recordStatuses } from '../../../constants/constants'

const Record: FC<{ id: string, title: string, status: string }> = ({
  title,
  status,
  id,
}) => {
  const dispatch = useAppDispatch()
  const notCompleted = recordStatuses.notCompleted
  const completed = recordStatuses.completed
  const handleUpdateUser:() => void = () => {
    const nextStatus =
        status === notCompleted ? completed : notCompleted
    dispatch(updateRecord({ id, 'status': nextStatus }))
  }

  return (
    <div className={styles.container}>
      <p onClick={handleUpdateUser}>{title}</p>
      <span>{status}</span>
    </div>
  )
}

export default Record
