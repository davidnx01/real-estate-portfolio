import React from 'react'
import styles from "../../styles/service.module.css"
import { services } from '../Constants/serviceConts'
import { HiArrowLongRight } from 'react-icons/hi2'

const Service = () => {
  return (
    <>
        {services.map((service) => (
            <div className={styles.service}>
                <div className={styles.icon}>
                    <img src={service.icon} alt="Service Icon" />
                </div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

                <a className={styles.service_cta}>
                    <HiArrowLongRight size={35} />
                    Nájsť Dom
                </a>
            </div>
        ))}
    
    </>
  )
}

export default Service