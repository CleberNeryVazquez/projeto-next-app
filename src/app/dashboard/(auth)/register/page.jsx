'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Register = () => {
  const [err, setErr] = useState(null);
  const router = useRouter();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=A conta foi criada com sucesso");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Criar uma Conta</h1>
      <h2 className={styles.subtitle}>
Por favor, inscreva-se para ir ao dashboard.</h2>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <input type="text" placeholder='Nome de Usuario' className={styles.input} required />
        <input type="email" placeholder='Email' className={styles.input} required />
        <input type="password" placeholder='Senha' className={styles.input} required />
        <button className={styles.button}>Registrar</button>
      {err && 'Algo deu errado !'}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link href='/dashboard/login'>Login com uma conta existente</Link>
    </div>
  )
}

export default Register