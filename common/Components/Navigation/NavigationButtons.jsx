import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from "../../../styles/navigation.module.css"

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

export default NavigationButtons