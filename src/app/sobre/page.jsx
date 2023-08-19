import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const Sobre = () => {
  return (
    <div>
      <div className={styles.imgContainer}
      >
        <Image src='' fill={true} alt='' className={styles.img}/>
      </div>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitulo}></h1>
        <h2 className={styles.imgDesc}></h2>
      </div>
    </div>
  )
}

export default Sobre