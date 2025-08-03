"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { HOME_CATEGORY_SLIDER } from "@/constant/data";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeCategorySlider() {
  const t = useTranslations("header");
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper mt-4"
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
        1280: {
          slidesPerView: 8,
        },
      }}
    >
      {HOME_CATEGORY_SLIDER.map((category) => (
        <SwiperSlide key={category.title} className="">
          <Link href={category.href} className="group">
            <div className="h-[20vh] p-3 bg-white relative rounded-sm text-center flex flex-col items-center justify-center w-full">
              <Image
                src={category.image}
                alt="category-slider"
                width={60}
                height={60}
                className="size-[60px] object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-[15px] font-[600] mt-3 capitalize">
                {t(category.title)}
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
