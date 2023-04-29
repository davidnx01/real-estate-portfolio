import React, { useState } from 'react'
import styles from "/styles/hero.module.css"
import Logo from '../Components/Logo'
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"




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
        <li>
          <a 
            href="#home"
            className={activeMenu === 0
              ? styles.active
              : ""
            }
            onClick={() => setActiveMenu(0)}
          >Domov</a>
        </li>
        <li>
          <a 
            href="#bestOffers"
            className={activeMenu === 1
              ? styles.active
              : ""
            }
            onClick={() => setActiveMenu(1)}
          >Najlepšie Ponuky</a>
        </li>
        <li>
          <a 
            href="#about"
            className={activeMenu === 2
              ? styles.active
              : ""
            }
            onClick={() => setActiveMenu(2)}
          >O Nás</a>
        </li>
        <li>
          <a 
            href="#services"
            className={activeMenu === 3
              ? styles.active
              : ""
            }
            onClick={() => setActiveMenu(3)}
          >Služby</a>
        </li>
        <li>
          <a 
            href="#agents"
            className={activeMenu === 4
              ? styles.active
              : ""
            }
            onClick={() => setActiveMenu(4)}
          >Agenti</a>
        </li>
      </ul>
    </>
  )
}