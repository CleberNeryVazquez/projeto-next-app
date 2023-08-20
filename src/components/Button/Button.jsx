import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

function Button({texto,url}) {
  return (
    <Link href={url}>
        <button className={styles.container}>{texto}</button>
    </Link>
  )
}

export default Button