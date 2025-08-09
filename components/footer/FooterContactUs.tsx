import Link from "next/link";
import React from "react";
import { CiChat2 } from "react-icons/ci";
import FooterHeading from "./FooterHeading";

export default function FooterContactUs() {
  return (
    <div className="flex flex-col basis-1/4 xl:border-r xl:border-gray-300">
      <FooterHeading title="Contact us" className="mb-4" />
      <div className="flex flex-col gap-y-1">
        <p className="text-sm font-normal text-subtext-primary">
          Classy Shop - Mega Super Store
        </p>
        <p className="text-sm font-normal text-subtext-primary">
          507 Union Trade Centre France
        </p>
      </div>
      <Link
        className="text-[13px] text-subtext-primary hover:text-primary transition-colors mt-6"
        href={`mailto:someone@example.com`}
      >
        sales@yourcompany.com
      </Link>
      <p className="text-xl font-semibold text-primary mt-5">
        (+91) 9876-543-210
      </p>
      <div className="flex items-center gap-2 mt-5">
        <CiChat2 size={40} className="text-primary" />
        <span className="text-base font-semibold text-subtext-primary">
          Online Chat <br /> Get Expert Help
        </span>
      </div>
    </div>
  );
}
