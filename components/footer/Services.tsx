import React from "react";
import { LiaShippingFastSolid, LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SERVICES_DATA = [
  {
    Icon: (
      <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
    ),
    title: "Free Shipping",
    description: "For all Orders Over $100",
  },
  {
    Icon: (
      <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
    ),
    title: "30 Days Returns",
    description: "For an Exchange Product",
  },
  {
    Icon: (
      <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
    ),
    title: "Secured Payment",
    description: "Payment Cards Accepted",
  },
  {
    Icon: (
      <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
    ),
    title: "Special Gifts",
    description: "Our First Product Order",
  },
  {
    Icon: (
      <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
    ),
    title: "Support 24/7",
    description: "Contact us Anytime",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 lg:gap-y-0 lg:grid-cols-5 pb-16 border-b border-gray-300 w-full">
      {SERVICES_DATA.map((service, idx) => (
        <div key={idx + 1} className="flex-center flex-col group">
          {service.Icon}
          <h3 className="text-base font-semibold mt-3">{service.title}</h3>
          <p className="text-[12px] font-medium">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
