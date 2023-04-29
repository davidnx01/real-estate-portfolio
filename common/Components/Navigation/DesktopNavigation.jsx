import React from 'react'
import styles from "../../../styles/navigation.module.css"
import NavigationMenu from './NavigationMenu'
import NavigationButtons from './NavigationButtons'
import Logo from '../Logo'

const DesktopNavigation = ({ activeMenu, setActiveMenu, setToggleMenu  }) => {
  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navigation_left_side}>

              <Logo />

              <NavigationMenu 
                activeMenu={activeMenu} 
                setActiveMenu={setActiveMenu}
                setToggleMenu={setToggleMenu}
              />
            </div>

            <div className={styles.navigation_right_side}>
              <NavigationButtons />
            </div>
          </nav>
    </>
  )
}

export default DesktopNavigation