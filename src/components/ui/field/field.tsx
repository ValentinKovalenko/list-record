import styles from './field.module.scss'
import { TypeInputProps } from './field.types'
import { errorsMessage } from '../../../constants/constants'

const Field = ({
  errors,
  name,
  className,
  maxLength,
  required,
  register,
  ...rest
}: TypeInputProps): JSX.Element => {
  return (
    <label className={styles.field}>
      <input {...register(name, { required, maxLength })} {...rest}/>
      <div className={styles.error}>
        {errors?.type && errorsMessage[errors?.type]}
      </div>
    </label>
  )
}

export default Field
