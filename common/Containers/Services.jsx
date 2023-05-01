import React from 'react'
import styles from "../../styles/services.module.css"
import Heading from '../Components/Heading'
import Service from '../Components/Service'

const Services = () => {
  return (
    <>
      <section id='services' className={styles.services_section}>
        <Heading 
          title="Naše Zameranie"
          description="Sme skupina skúsených profesionálov, ktorí sú oddaní tomu,
          aby sme Vám pomohli nájsť ideálne bývanie alebo obchodnú nehnuteľnosť."
        />

        <div className={styles.services_wrap}>
          <Service />
        </div>


      </section>
    </>
  )
}

export default Services