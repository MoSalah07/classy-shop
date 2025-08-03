import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  classNameLink?: string;
  classNameImage?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  classNameImage = "lg:basis-[25%]",
  classNameLink = "w-[120px] sm:w-[200px] object-cover object-center",
  width = 200,
  height = 200,
}: IProps) {
  return (
    <Link href={`/`} className={classNameImage}>
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={width}
        height={height}
        className={classNameLink}
      />
    </Link>
  );
}
