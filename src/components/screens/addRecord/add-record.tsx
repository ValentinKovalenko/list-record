import Field from '../../ui/field/field'
import Button from '../../ui/button/button'
import styles from './add-record.module.scss'
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { addRecord } from '../../../store/listRecordSlice/list-record-slice'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../../hooks/redux'

const AddRecord: React.FC = () => {
  const {
    formState,
    register,
    handleSubmit,
    reset,
  } = useForm()
  const dispatch = useAppDispatch()
  const idRecord = uuidv4()
  const onSubmit: SubmitHandler<{record: string}> =
      (data: {record: string}) => {
        dispatch(addRecord({
          'id': idRecord,
          'title': data.record,
          'status': 'Not Completed',
        }))
        reset()
      }

  return (
    <form onSubmit = {handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      className={styles.container}>
      <Field
        name='record'
        register={register}
        placeholder='Add new record...'
        type='text'
        maxLength={20}
        required={true}
        errors={formState.errors.record as FieldError}
      />
      <Button type='submit'>Add record</Button>
    </form>
  )
}

export default AddRecord
