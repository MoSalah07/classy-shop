import { IBlogsBanner } from "@/types/data.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime, IoIosArrowForward } from "react-icons/io";

export default function BlogItem({
  description,
  href,
  image,
  title,
}: IBlogsBanner) {
  return (
    <div className="relative flex flex-col gap-y-4 group">
      <div className="w-full overflow-hidden rounded-md cursor-pointer relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full transition-all group-hover:scale-105 object-cover"
        />
        <span className="flex-between text-white absolute bottom-[5px] left-[5px] bg-primary rounded-md p-1 text-[12px]">
          <IoMdTime size={20} />5 APRIL, 2023
        </span>
      </div>
      <Link href={href} className="cursor-pointer">
        <h3 className="truncate text-base font-semibold text-black hover:text-primary transition-colors">
          {title}
        </h3>
      </Link>
      <p className="truncate text-sm font-normal text-black">{description}</p>
      <div>
        <Link
          href={href}
          className="font-semibold text-sm hover:text-primary transition-colors flex items-center gap-2"
        >
          <span> Read More</span>
          <IoIosArrowForward size={13} />
        </Link>
      </div>
    </div>
  );
}
