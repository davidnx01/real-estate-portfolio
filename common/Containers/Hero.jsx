import React, { useState } from 'react'
import styles from "/styles/hero.module.css"
import Logo from '../Components/Logo'
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { navLinks } from '../Constants/navLinks'
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Hero = () => {

  const [activeMenu, setActiveMenu] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

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
          <NavigationButtons />
        </div>
      </nav>

      <nav className={styles.mobile_navbar}>
        <Logo />

        <div className={styles.mobile_navbar_menu}>
          {toggleMenu
            ? <RiCloseLine 
                size={30} color="white" onClick={() => setToggleMenu(false)} cursor="pointer" 
              />
            : <RiMenu3Fill 
                size={26} color="white" onClick={() => setToggleMenu(true)} cursor="pointer"
              />
          }

          {toggleMenu && (
            <>
              <div className={styles.mobile_menu}>
                <NavigationMenu 
                  activeMenu={activeMenu} 
                  setActiveMenu={setActiveMenu}
                  setToggleMenu={setToggleMenu}
                />
                <div className={styles.divider}></div>
                <NavigationButtons />
              </div>
            </>
          )
          }
        </div>
      </nav>
    </>
  )
}

export default Hero

const NavigationMenu = ({ activeMenu, setActiveMenu, setToggleMenu }) => {
  return (
    <>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
            <a 
              key={item.title} 
              href={item.id}
              onClick={() => setActiveMenu(index) || setToggleMenu(false)}
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

const NavigationButtons = () => {
  return (
    <>
      <a href="#" className={styles.navigation_right_side__login}>
        <AiOutlineUser size={20} />
        Prihlásiť sa
      </a>

      <a href="#" className={styles.navigation_right_side__cta}>
        Pridať Nehnuteľnosť
        <MdOutlineKeyboardArrowRight size={20} />
      </a>
    </>
  )
}