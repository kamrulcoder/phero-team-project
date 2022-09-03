
import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./slider.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slideritem from "./Slideritem";

function Slider() {
  return (
    <>
    <section  className={styles.home_slider}>
        <Container>


        <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
      <Slideritem  title ="On the entire range of NeonCart"></Slideritem>
      </SwiperSlide>
      
      <SwiperSlide>
        <Slideritem  title ="the entire range of NeonCart"></Slideritem>
        </SwiperSlide>

        
      <SwiperSlide>
        <Slideritem  title =" entire range of NeonCart"></Slideritem>
        </SwiperSlide>
        
      </Swiper>
      </Container>
      </section>
    </>
  );
}

export default Slider;
