import React from 'react'
import styles from "../../styles/heading.module.css"

const Heading = ({title, description}) => {
  return (
    <>
        <div className={styles.heading}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
  )
}

export default Heading