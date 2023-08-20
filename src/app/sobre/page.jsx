import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import imgSobre from 'public/ceudourado.jpg' 
import Button from '@/components/Button/Button'
const Sobre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src={imgSobre} fill={true} alt='Imagem do ceu com cores vibrantes' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitulo}>Contador de historias digitais</h1>
          <h2 className={styles.imgDesc}>Criando lindas experiencias digitas na palma da sua mão</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.titulo}>Sobre Mim</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta adipisci nesciunt, magni iusto optio reiciendis dolorum repudiandae culpa ut sapiente repellendus eos consequatur quibusdam ad! Ut eveniet iure culpa.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro, blanditiis non perspiciatis quis velit? Facere in reprehenderit repellat ipsa suscipit a esse praesentium molestias eligendi! Expedita asperiores illo minima?
            </p>
        </div>
        <div className={styles.item}>
          <h1>O que faço</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores architecto reiciendis cum libero nihil recusandae unde ad expedita sint, autem commodi voluptate, magni soluta veritatis nesciunt illum necessitatibus quam officiis.
            <br />
            -Descrição <br />
            -Desbrição <br />
            <Button url='contato' texto='Contato'/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sobre