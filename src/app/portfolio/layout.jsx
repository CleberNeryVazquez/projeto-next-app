import React from 'react'
import styles from './page.module.css'

const Layout = ({children})=>{
    return (
        <div >
            <h1 className={styles.mainTitle}>
                Outros trabalhos
            </h1>
                {children}
        </div>
      )
}

export default Layout