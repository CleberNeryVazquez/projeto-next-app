import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Este é o titulo do artigo</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque repudiandae maiores quibusdam veniam ipsa et sunt incidunt, autem suscipit voluptatibus. Cumque aspernatur sunt, culpa cum dicta laboriosam doloribus nihil.</p>
          <div className={styles.autor}>
            <Image src='' alt='' width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>Janet Vazquez</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='' alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis magni architecto aut alias officia, ut quod vel exercitationem esse ipsa soluta maxime obcaecati error facilis eius nihil, impedit voluptates. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fuga tempore nulla a assumenda quisquam molestiae ad distinctio soluta aspernatur. Laudantium nemo voluptate sunt dolore, commodi quae tempore explicabo voluptatum! <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi vel repellat aut quis incidunt dolorem fugiat aliquid distinctio iste! Voluptatem hic odit dolores consequuntur, saepe ab praesentium sed facere!
        </p>
      </div>
    </div>
  )
}

export default BlogPost