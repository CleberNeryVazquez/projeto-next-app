'use client'

import { signIn, useSession } from 'next-auth/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if(session.status === 'loading'){
    return  <div class={styles.loader}></div>
    
  }
  if(session.status === 'unauthenticated'){
    router?.push('/dashboard')
  }
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email)
    console.log(password)
    signIn("credentials",{ email, password });
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
      <input type="email" placeholder='Email' className={styles.input} required />
      <input type="password" placeholder='Senha' className={styles.input} required />
      <button className={styles.button}>Entrar</button>
      </form>
      <button onClick={()=>signIn('google')}>Entrar com Google</button>  
    </div>
  )
}

export default Login