"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import ProductItemSlider from "./ProductItemSlider";

export default function ProductsSlider({ items }: { items: number }) {
  return (
    <Swiper
      spaceBetween={10}
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper mt-4 !w-full !h-full"
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
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
    >
      {Array.from({ length: items }).map((_, idx) => (
        <SwiperSlide key={idx + 1}>
          <ProductItemSlider />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
