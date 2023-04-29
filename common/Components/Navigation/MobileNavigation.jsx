import React from 'react'
import styles from "../../../styles/navigation.module.css"
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import Logo from '../Logo';
import NavigationMenu from './NavigationMenu';
import NavigationButtons from './NavigationButtons';

const MobileNavigation = ({ toggleMenu, setToggleMenu, setActiveMenu, activeMenu }) => {
  return (
    <>
        <nav className={styles.mobile_navbar}>
            <Logo />

            <div className={styles.mobile_navbar_menu}>
              {toggleMenu
                ? <RiCloseLine 
                    size={30} color="white" onClick={() => setToggleMenu(false)}    cursor="pointer" 
                  />
                : <RiMenu3Fill 
                    size={26} color="white" onClick={() => setToggleMenu(true)}     cursor="pointer"
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

export default MobileNavigation