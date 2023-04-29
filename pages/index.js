import { About, Agents, BestOffers, Footer, Hero, Services } from "../common/Containers"
import styles from "/styles/home.module.css"

export default function Home() {
  return (
    <>
      <div id="wrapper">
        <div className={styles.header}>
          <Hero />
        </div>
        <BestOffers />
        <About />
        <Services />
        <Agents />
        <Footer />
      </div> 
    </>
  )
}
