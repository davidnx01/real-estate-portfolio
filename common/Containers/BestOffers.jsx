import styles from "../../styles/bestoffers.module.css"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";
import { offersValue } from "../Constants/bestOffersConts";
import Heading from "../Components/Heading";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const BestOffers = () => {
  return (
    <>
    <main>
      <div className={styles.offers_upper_row}>
        <Heading 
          title="Najlepšie Ponuky"
          description="Tu nájdete najaktuálnejšie a najzaujímavejšie nehnuteľnosti na predaj či  prenájom. Prehliadnite si našu práve teraz."
        />

        <a href="#">
          Pozrieť všetky ponuky
          <MdOutlineKeyboardArrowRight />
        </a>
      </div>

      <div className={styles.swiper_wrapper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            type: "progressbar"
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {offersValue.map((swipe) => (
            <SwiperSlide className={styles.own_swipe}>
              <div className={styles.offer_box}>
                <div className={styles.offer_upper_part}>
                  <img 
                    src={swipe.image} 
                    alt="Property" 
                  />
                  <div className={styles.offer_tag}>
                    NA PREDAJ
                  </div>
                </div>

                <div className={styles.offer_bottom_part}>
                  <h3>{swipe.propertyName}</h3>
                  <div className={styles.offer_location}>
                   <HiLocationMarker />
                   <p>{swipe.propertyLocation}</p>
                  </div>

                  <div className={styles.divider}></div>

                  <div className={styles.offer_stats_row}>
                    <div className={styles.offer_left}>
                      <HiLocationMarker />
                      <p>{swipe.measure}</p>
                    </div>
                    
                    <div className={styles.offer_right}>
                      <GiHomeGarage />
                      <p>{swipe.garage}</p>
                    </div>
                  </div>

                  <div className={styles.offer_stats_row}>
                    <div className={styles.offer_left}>
                      <FaBed />
                      <p>{swipe.bedroom}</p>
                    </div>
                    
                    <div className={styles.offer_right}>
                      <FaBath />
                      <p>{swipe.bathroom}</p>
                    </div>
                  </div>

                  <div className={styles.divider}></div>
                  
                  <div className={styles.offer_stats_row}>
                    <div className={styles.offer_left}>
                      <AiOutlineUser />
                      <p>{swipe.owner}</p>
                    </div>
                    
                    <div className={styles.offer_right}>
                      <BiTimeFive />
                      <p>{swipe.time}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.offer_price}>
                  <p>{swipe.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
    </>
  )
}

export default BestOffers