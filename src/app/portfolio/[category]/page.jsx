import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import {items} from './data.js'
import { notFound } from 'next/navigation'

const getData = (cat) => { /* aqui o cat é a categoria que esta em um array no data.js */
  const data = items[cat] 
  if(data) {
    return data
  }
  return notFound() /* se data for falso ele retorna pagina 404 nao encontrada */
}
const Category = ({params}) => {
  const data = getData(params.category) /*  este category é o nome da pasta [category] dentro de portfolio  */
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url='#' texto='Ver mais'/>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt='' />
          </div>
        </div>
      ))};
    </div>
  )
}

export default Category