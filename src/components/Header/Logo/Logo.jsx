import React from 'react'
import styles from './Logo.module.css';
import logo from './img/logo.svg'

export const Logo = props => {
    return(
        <a className={styles.link} href='/'>
            <img className={styles.logo} src={logo} alt='logo'></img>
        </a>
    )
}