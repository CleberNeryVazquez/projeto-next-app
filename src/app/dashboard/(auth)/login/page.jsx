'use client'

import { signIn } from 'next-auth/react'
import styles from './page.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={()=>signIn('google')}>Entrar com Google</button>
      
    </div>
  )
}

export default Login