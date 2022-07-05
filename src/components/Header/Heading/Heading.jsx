import React from 'react'
import styles from './Heading.module.css';

export const Heading = props => {
    return <div className={styles.heading}>{props.text}</div>
}