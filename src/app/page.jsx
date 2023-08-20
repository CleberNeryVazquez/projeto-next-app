import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.titulo}>Melhor design para seus produtos digitais</h1>
        <p className={styles.descricao}>Transforme sua ideia em realidade.O mais moderno em tecnologia para seu site.</p>
        <Button url='/portfolio' texto='Portifolio'/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img}/>
      </div>
    </div>
  )
}
