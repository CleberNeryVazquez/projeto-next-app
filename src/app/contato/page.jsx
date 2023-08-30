import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
  title: 'Contato',/* este é o titulo da aba de navegacao */
  description: 'Pagina de contato',
}

const Contato = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Envie uma mensagem</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill={true} className={styles.image}/>
      </div>
      <form action="" className={styles.form}>
        <input type="text" placeholder ='Nome' className={styles.input}/>
        <input type="email" placeholder ='Email' className={styles.input}/>
        <textarea className={styles.textArea} id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
        <Button url='#' texto='Enviar'/>
      </form>

      </div>
    </div>
  )
}

export default Contato