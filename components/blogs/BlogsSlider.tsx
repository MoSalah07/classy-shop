"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import BlogItem from "./BlogItem";
import { BLOGS_BANNER } from "@/constant/data";

export default function BlogsSlider() {
  return (
    <Swiper
      spaceBetween={20}
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper !py-8 !w-full !h-full"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {BLOGS_BANNER.map((blog, idx) => (
        <SwiperSlide key={idx + 1}>
          <BlogItem {...blog} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
