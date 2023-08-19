import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className= {styles.container} >
    <div>2023 - Cleber Nery Vazquez</div>
      <div className={styles.social}>
        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' width={15} height={15} alt='Cleber Nery Dev instagran'/>  
        <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' width={15} height={15} alt='Cleber Nery Dev linkedin'/>  
        <Image  width={15} height={15} src='/1.png' alt='Cleber Nery Dev facebook'/>
      </div>  
    </div>
  )
}

export default Footer