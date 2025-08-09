"use client";
import React from "react";
import Services from "./Services";
import FooterList from "./FooterList";
import { LIST_FOOTER_ONE, LIST_FOOTER_TWO } from "@/constant/data";
import FooterFormSubscribe from "./FooterFormSubscribe";
import FooterContactUs from "./FooterContactUs";
import FooterAds from "./FooterAds";

export default function Footer() {
  return (
    <footer className="pt-6 pb-24 lg:pb-0 bg-[#fafafa]">
      <div className="main-container pb-12">
        <div className="flex items-center justify-center gap-8 py-8">
          <Services />
        </div>
        <div className="flex xl:items-center xl:justify-between flex-col xl:flex-row gap-y-8 xl:gap-y-0">
          <FooterContactUs />
          <div className="flex sm:items-center flex-col gap-y-4 sm:gap-y-0 sm:flex-row basis-1/2">
            <FooterList title="Products" list={LIST_FOOTER_ONE} />
            <FooterList title="Our company" list={LIST_FOOTER_TWO} />
          </div>
          <FooterFormSubscribe />
        </div>
      </div>
      <div className="h-[16vh] md:h-[8vh]">
        <div className="main-container border-t border-gray-300 w-full h-full">
          <FooterAds />
        </div>
      </div>
    </footer>
  );
}
