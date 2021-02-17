import styles from './alert.module.css';
import cn from 'classnames';


export default function ALert({children, type}){
    return (
        <div
        className= {cn({
            [styles.succes]: type==='success',
            [styles.error]: type==='error'
        })}
        >
        {children}
        </div>
    )
}