import styles from './Field.module.scss'
import { TypeInputProps } from './field.types'
import { errorsMessage } from '../../../constants/constants'

const Field = ({ errors, name, className, maxLength, required, register, ...rest }: TypeInputProps) => {
  return (
    <label className={styles.field}>
      <input {...register(name, { required, maxLength })} {...rest}/>
      <div className={styles.error}>{errors && errorsMessage[errors.type]}</div>
    </label>
  )
}

export default Field
