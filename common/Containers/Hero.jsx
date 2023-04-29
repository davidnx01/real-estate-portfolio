import React, { useState } from 'react'
import styles from "/styles/hero.module.css"
import Logo from '../Components/Logo'
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { navLinks } from '../Constants/navLinks'

const Hero = () => {

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navigation_left_side}>

          <Logo />

          <NavigationMenu 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
          />
        </div>

          <div className={styles.navigation_right_side}>
            <a href="#" className={styles.navigation_right_side__login}>
              <AiOutlineUser size={20} />
              Prihlásiť sa
            </a>
              
            <a href="#" className={styles.navigation_right_side__cta}>
              Pridať Nehnuteľnosť
              <MdOutlineKeyboardArrowRight size={20} />
            </a>
          </div>
      </nav>
    </>
  )
}

export default Hero

const NavigationMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
            <a 
              key={item.title} 
              href={item.id}
              onClick={() => setActiveMenu(index)}
              className=
              {activeMenu === index
                ? styles.active
                : ""
              }
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}