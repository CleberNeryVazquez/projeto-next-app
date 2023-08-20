import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Escolha uma galeria</h1>
      <div className={styles.itens}>
        <Link href='/portfolio/ilustrations' className={styles.item} >
          <span className={styles.title}>Ilustrações</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item} >
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/application' className={styles.item} >
          <span className={styles.title}>Aplicações</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio