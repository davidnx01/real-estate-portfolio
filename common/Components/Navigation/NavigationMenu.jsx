import { navLinks } from '@/common/Constants/navLinks'
import React from 'react'
import styles from "../../../styles/navigation.module.css"

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

export default NavigationMenu