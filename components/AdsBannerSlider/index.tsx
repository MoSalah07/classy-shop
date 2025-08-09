"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { IAdsImagesBanners } from "@/types/data.type";
export default function AdsBannerSlider({
  items,
}: {
  items: IAdsImagesBanners[];
}) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
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
            slidesPerView: 4,
          },
        }}
        className="mySwiper main-container btn-small"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx + 1}>
            <div className="relative overflow-hidden rounded-lg group">
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt={`ads_banner`}
                  width={300}
                  height={300}
                  className="w-full object-contain object-center transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
