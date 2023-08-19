import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.titulo}>Melhor design para seus produtos digitais</h1>
        <p className={styles.descricao}>Transforme sua ideia em realidade.O mais moderno em tecnologia para seu site.</p>
        <button className={styles.button}>Projetos</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img}/>
      </div>
    </div>
  )
}
