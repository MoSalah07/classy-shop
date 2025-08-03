"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function HomeSlider() {
  return (
    <div className="my-4 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper w-full  h-[25vh] lg:h-[50vh] aspect-square rounded-lg !overflow-visible"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <SwiperSlide key={idx} className="relative rounded-lg">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={`/images/banners/${idx + 1}.jpg`}
                alt={`Banner ${idx + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
