import React from 'react'
import styles from "../../styles/footer.module.css"
import Logo from '../Components/Logo'
import { footerContactLinks, footerFollowLinks, footerNavLinks } from '../Constants/footerConts'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className={styles.footer_wrap}>
          <div className={styles.footer_left_side}>
            <Logo />
            <p>
              Sme realitná kancelária poskytujúca služby 
              v oblasti kúpy, predaja a prenájmu nehnuteľností. 
              Prehľadajte našu webovú stránku pre viac informácií.
            </p>
          </div>

          <div className={styles.footer_right_side}>
            <div className="footer_right_side_list">
              <h4>Odkazy</h4>
              <ul>
                {footerNavLinks.map((link) => (
                  <li key={link.link}>
                    <a href={link.id}>{link.link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_right_side_list">
              <h4>Kontakt</h4>
              <ul>
                {footerContactLinks.map((link) => (
                  <li key={link.info}>
                    {link.infoIcon}
                    <p>{link.infoText}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_right_side_list">
              <h4>Odkazy</h4>
              <ul>
                {footerFollowLinks.map((link) => (
                  <li>
                    <a href={link.idIcon}>
                      {link.linkIcon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    
    
    
    </>
  )
}

export default Footer