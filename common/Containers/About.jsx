import React from 'react'
import "../../styles/about.module.css"
import Heading from '../Components/Heading'
import Benefit from '../Components/Benefit'
import styles from "../../styles/about.module.css"

const About = () => {
  return (
    <>
    <section>
      <div className={styles.about_left_side}>
        <Heading 
          title="O Nás"
          description="Sme skupina skúsených profesionálov, ktorí sú oddaní tomu, 
          aby sme Vám pomohli nájsť ideálne bývanie alebo obchodnú nehnuteľnosť."
        />

        <div className={styles.about_left_side_benefits}>
          <Benefit />
        </div>
      </div>


    

    
    
    
    </section>
    </>
  )
}

export default About