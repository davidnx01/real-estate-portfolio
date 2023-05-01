import React from 'react'
import styles from "../../styles/agentscta.module.css"

const AgentsCTA = () => {
  return (
    <>
        <section className={styles.acta}>
            <div className={styles.section_wrap}>
                <div className={styles.cta_left}>
                    <div className={styles.cta_icon}>
                        <img 
                            src="/agenticon.svg" 
                            alt="Icon" 
                        />
                    </div>

                    <div className={styles.cta_text}>
                        <h4>Buď Našim Agentom</h4>
                        <p>Pripoj sa k nášmu tímu a staň sa súčasťou úspešnej realitnej kancelárie! </p>
                    </div>
                </div>

                <a href="#">
                    CHCEM SA PRIPOJIŤ
                </a>
            </div>
        </section>
    </>
  )
}

export default AgentsCTA