import React from 'react'
import styles from "../../styles/benefit.module.css"

const Benefit = ({ icon, title, description }) => {
  return (
    <>
        {
          <div className={styles.benefit}>
            <img src={icon} alt="Icon" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>}
    
    </>
  )
}

export default Benefit