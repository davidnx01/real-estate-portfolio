import React from 'react'
import styles from "../../styles/footer.module.css"
import Logo from '../Components/Logo'
import { footerContactLinks, footerFollowLinks, footerNavLinks } from '../Constants/footerConts'
import { BsEnvelopeOpen } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer id='footer' className={styles.footer}>
        <div className={styles.newsletter}>
          <h4>Prihlásiť sa na odber noviniek</h4>
          <form>
            <div className={styles.newsletter_div}>
              <BsEnvelopeOpen className={styles.newsletter_envelope} />
              <input 
                type="email"
                placeholder='Váš Email'
                className={styles.newsletter_email}
              />
              <input 
                type="submit" 
                value="Prihlásiť sa"
                className={styles.newsletter_submit}
              />
            </div>
          </form>
        </div>


        <div className={styles.footer_wrap}>
          <div className={styles.footer_left_side}>
            <Logo />
            <p className={styles.footer_description}>
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
                  <li key={link.info} className={styles.contact_li}>
                    {link.infoIcon}
                    <p>{link.infoText}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_right_side_list">
              <h4>Sledujte nás na</h4>
              <ul className={styles.follow_wrap}>
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