import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import CatagoryItem from "./CatagoryItem";
import { Container } from "react-bootstrap";


function HomeCatagory() {
    
  return (
    <>


<Container>
<Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
          <CatagoryItem></CatagoryItem>
      </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
        <SwiperSlide>
            <CatagoryItem></CatagoryItem>
        </SwiperSlide>
      </Swiper>
      </Container>
    </>
    
  )
}

export default HomeCatagory