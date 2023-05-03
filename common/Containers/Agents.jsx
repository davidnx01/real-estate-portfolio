import React from 'react'
import styles from "../../styles/agents.module.css"
import Heading from '../Components/Heading'
import { agentsConts } from '../Constants/agentsConts'
import { RiPhoneFill, RiInstagramFill } from "react-icons/ri"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Agents = () => {
  return (
    <>
      <section id='agents' className={styles.agents_section}>
        <Heading 
          title="Naši Agenti"
          description="Spoznajte náš tím skúsených realitných agentov, 
          ktorí Vám pomôžu s kúpou, predajom alebo prenájmom nehnuteľnosti."
        />

        <div className={styles.agents_wrap}>
          {agentsConts.map((agent) => (
            <div className={styles.agent_box}>
              <div className={styles.agent_upper_part}>
                <div className={styles.callCTA}>
                  <RiPhoneFill />
                </div>
                <img src={agent.image} alt="Agent" />
                <div className={styles.experience}>
                  <p>{agent.experience}</p>
                </div>
              </div>


              <div className={styles.agent_bottom_part}>
                <h4>{agent.name}</h4>
                <div className={styles.agent_bottom_part_row}>
                  <p>{agent.job}</p>

                  <div className={styles.agent_socials}>
                    <FaFacebookF size={17} cursor="pointer" />
                    <FaLinkedinIn cursor="pointer" />
                    <RiInstagramFill cursor="pointer" />
                    <FaTwitter cursor="pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Agents