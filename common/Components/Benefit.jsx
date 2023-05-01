import React from 'react'
import styles from "../../styles/benefit.module.css"
import { benefitConts } from '../Constants/benefitConts'

const Benefit = () => {
  return (
    <>
        {benefitConts.map((benefit) => (
          <div className={styles.benefit}>
            <img src={benefit.icon} alt="Icon" />
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))
      }
  
    </>
  )
}

export default Benefit