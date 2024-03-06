import styles from './Button.module.scss';
import {InputHTMLAttributes} from "react";
const Button = ({children}: InputHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={styles.button}>{children}</button>
    );
};

export default Button;