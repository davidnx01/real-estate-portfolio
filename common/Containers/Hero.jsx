import React, { useState } from 'react'
import DesktopNavigation from '../Components/Navigation/DesktopNavigation'
import MobileNavigation from '../Components/Navigation/MobileNavigation'
import styles from "../../styles/hero.module.css"
import { BsHouses } from "react-icons/bs"
import { GrFormDown } from "react-icons/gr"

const Hero = () => {

  const [activeMenu, setActiveMenu] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <DesktopNavigation 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setToggleMenu={setToggleMenu}
      />

      <MobileNavigation 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
      />

      <div className={styles.header_content}>
        <h1>
          Nájdite si svoj ideálny domov s našou 
          realitnou kanceláriou
        </h1>

        <p>
          Naša realitná kancelária ponúka profesionálny a 
          individuálny prístup pre predaj alebo kúpu nehnuteľností 
          a zabezpečíme vám najlepšie riešenie.
        </p>
      </div>

      <div className={styles.header_form}>
        <div className={styles.header_form_top_part}>
          <div className={styles.header_form_top_bar}>
            Predať
          </div>

          <div className={styles.header_form_top_bar}>
            Prenajať
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.form_left_side}>
            <div className={styles.select_wrap}>

              <BsHouses className={styles.select_left_icon} />

              <select className={styles.select}>
                <option disabled selected value="">Typ nehnuteľnosti</option>
                <option>Byt</option>
                <option>Rodinný dom</option>
                <option>Komerčná Nehnuteľnosť</option>
                <option>Priemyselná Nehnuteľnosť</option>
              </select>

              <GrFormDown className={styles.select_right_icon} />

            </div>


            <div className={styles.divider}></div>

            <div className={styles.form_search}>
              <input 
                type="text" 
                placeholder='Hľadať podľa lokality'
              />
            </div>
          </div>

          <input 
            type="button" 
            value="Vyhľadať"
          />
        </form>
      </div>
    </>
  )
}

export default Hero