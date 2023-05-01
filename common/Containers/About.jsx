import React from 'react'
import "../../styles/about.module.css"
import Heading from '../Components/Heading'
import Benefit from '../Components/Benefit'
import styles from "../../styles/about.module.css"
import { HiArrowLongRight } from "react-icons/hi2"

const About = () => {
  return (
    <>
      <section id='about' className={styles.about_section}>
        <div className={styles.about_left_side}>
          <Heading 
            title="O Nás"
            description="Sme skupina skúsených profesionálov, ktorí sú oddaní tomu, 
            aby sme Vám pomohli nájsť ideálne bývanie alebo obchodnú nehnuteľnosť."
          />
  
          <div className={styles.about_left_side_benefits}>
            <Benefit />
          </div>
    
          <a href="#" className={styles.about_cta}>
            <HiArrowLongRight size={35} />
            Zistiť Viac
          </a>
        </div>
    
        <div className={styles.about_right_side}>
          <img 
            src="/aboutus.jpg" 
            alt="Apartment"
            className={styles.about_main_image}
          />
          <img 
            src="/dots_design.svg" 
            alt="Dots Design"
            className={styles.dots_design}
          />
          <div className={styles.award_design}>
            <img src="/trophy.svg" alt="Trophy" />
            <h5>
              Národné<br></br>
              Ocenenie<br></br>
              Nehnuteľností
            </h5>
    
            <p><span>Analýza</span></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About