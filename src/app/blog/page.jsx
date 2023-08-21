import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/testid' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
          src=''
          alt=''
          width={400}
          height={250}
          className={styles.img}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo do artigo, não muito longo</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi hic exercitationem architecto, omnis consectetur consequuntur veniam explicabo dolores praesentium quae saepe, error ducimus, voluptatem nesciunt nostrum rem eveniet! Aperiam?</p>
        </div>
      </Link>
      <Link href='/blog/testid' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
          src=''
          alt=''
          width={400}
          height={250}
          className={styles.img}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo do artigo, não muito longo</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi hic exercitationem architecto, omnis consectetur consequuntur veniam explicabo dolores praesentium quae saepe, error ducimus, voluptatem nesciunt nostrum rem eveniet! Aperiam?</p>
        </div>
      </Link>
      <Link href='/blog/testid' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
          src=''
          alt=''
          width={400}
          height={250}
          className={styles.img}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Titulo do artigo, não muito longo</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quasi hic exercitationem architecto, omnis consectetur consequuntur veniam explicabo dolores praesentium quae saepe, error ducimus, voluptatem nesciunt nostrum rem eveniet! Aperiam?</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog