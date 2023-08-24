import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error('Falha no ao buscar dados')
  }
 
  return res.json()
}
const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
      <Link href='/blog/testid' className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
          src=''
          alt=''
          width={400}
          height={250}
          className={styles.img}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi hic exercitationem architecto, omnis consectetur consequuntur veniam explicabo dolores praesentium quae saepe, error ducimus, voluptatem nesciunt nostrum rem eveniet! Aperiam?</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog