import styles from './button.module.scss'
import { InputHTMLAttributes } from 'react'
import { ButtonType } from './button.type'

const Button: React.FC<ButtonType> =
    ({ children }: InputHTMLAttributes<HTMLButtonElement>) => {
      return (
        <button className={styles.button}>{children}</button>
      )
    }

export default Button
