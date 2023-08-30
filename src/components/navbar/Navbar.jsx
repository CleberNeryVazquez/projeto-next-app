'use client'
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url:   '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url:   '/blog'
    },
    {
        id: 4,
        title: 'Sobre',
        url:   '/sobre'
    },
    {
        id: 5,
        title: 'Contato',
        url:   '/contato'
    },
    {
        id: 6,
        title: 'Dashboard',
        url:   '/dashboard'
    },
]

const Navbar = () => {
    const session = useSession()
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>Cleber</Link>
        <div className={styles.links}>
            <DarkModeToggle/>
         {Links.map((link)=> (
            <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
            </Link>
         ))}
         {  session.status === 'authenticated' && (
             <button className={styles.logout}onClick={signOut}>Logout</button>   
         )}
        </div>    
    </div>
  )
}

export default Navbar