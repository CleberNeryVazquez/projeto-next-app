import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'


const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit excepturi ipsum fugiat magni mollitia quam quaerat dolore perspiciatis, assumenda atque recusandae ipsa modi optio pariatur laboriosam debitis. Corrupti, magnam sequi?</p>
          <Button url='#' texto='Ver mais'/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src='https://images.pexels.com/photos/11783254/pexels-photo-11783254.jpeg' alt='' />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit excepturi ipsum fugiat magni mollitia quam quaerat dolore perspiciatis, assumenda atque recusandae ipsa modi optio pariatur laboriosam debitis. Corrupti, magnam sequi?</p>
          <Button url='#' texto='Ver mais'/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src='https://images.pexels.com/photos/11783254/pexels-photo-11783254.jpeg' alt='' />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit excepturi ipsum fugiat magni mollitia quam quaerat dolore perspiciatis, assumenda atque recusandae ipsa modi optio pariatur laboriosam debitis. Corrupti, magnam sequi?</p>
          <Button url='#' texto='Ver mais'/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src='https://images.pexels.com/photos/11783254/pexels-photo-11783254.jpeg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Category