import React from 'react'
import styles from "../../styles/logo.module.css"

const Logo = () => {
  return (
    <>
      <a href="#" className={styles.logo}>
        <img
         src="/logo.svg" 
         alt="Logo" 
         title="Logo"
        />

        <div className={styles.logo_typography}>
          <p>ESTATE</p>
          <p>PORTFOLIO</p>
        </div>
      </a>
    </>
  )
}

export default Logo