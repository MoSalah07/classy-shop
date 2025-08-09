import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const ADS_PAYMENT: string[] = [
  "/images/footer/mastercard.png",
  "/images/footer/visa.png",
  "/images/footer/paypal.png",
  "/images/footer/american-express.png",
];

export default function FooterAds() {
  return (
    <div className="size-full flex items-center justify-between flex-col md:flex-row gap-y-4 md:gap-y-0 py-6 md:py-0">
      {/* Social Links */}
      <div className="flex items-center gap-4">
        <Link
          href={`https://www.linkedin.com/in/mohamed-salah-957284282`}
          target="_blank"
          className="cursor-pointer transition-colors text-text-primary hover:text-primary"
        >
          <FaLinkedinIn size={18} />
        </Link>
        <Link
          href={`https://github.com/MoSalah07`}
          target="_blank"
          className="cursor-pointer transition-colors text-text-primary hover:text-primary"
        >
          <FaGithub size={18} />
        </Link>
        <Link
          href={`https://portfolio-seven-lake-26.vercel.app`}
          target="_blank"
          className="cursor-pointer transition-colors text-text-primary hover:text-primary"
        >
          <FaFacebookF size={18} />
        </Link>
      </div>
      {/* Copyright */}
      <Link
        href={`https://portfolio-seven-lake-26.vercel.app`}
        target="_blank"
        className="font-semibold text-subtext-primary text-sm transition-colors hover:text-primary"
      >
        &copy; {new Date().getFullYear()} - Classy Shop
      </Link>
      {/* Payment Methods Images */}
      <div className="flex items-center gap-4">
        {ADS_PAYMENT.map((image, idx) => (
          <Image key={idx} src={image} alt="ads" width={30} height={30} />
        ))}
      </div>
    </div>
  );
}
