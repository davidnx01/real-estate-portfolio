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
                   {swipe.propertyLocation}
                  </div>

                  <div className={styles.divider}></div>

                  <div className={styles.offer_stats_row}>
                    <div className={styles.offer_left}>
                      
                    </div>
                  </div>
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