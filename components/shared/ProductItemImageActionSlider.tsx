import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, CardMedia } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";

const BtnActionStyle = {
  width: "35px",
  height: "35px",
  minWidth: "35px",
  borderRadius: "100%",
  backgroundColor: "#fff",
  color: "#000",
  "&:hover": {
    backgroundColor: "#ff5252",
    color: "#fff",
  },
};

const ACTIONS_BTN_PRODUCTS: { title: string; icon: React.ReactNode }[] = [
  {
    title: "Zoom",
    icon: <MdZoomOutMap className="text-lg transition-colors" />,
  },
  {
    title: "Compare",
    icon: <IoGitCompareOutline className="text-lg transition-colors" />,
  },
  {
    title: "Wishlist",
    icon: <FaRegHeart className="text-lg transition-colors" />,
  },
];

export default function ProductItemImageActionSlider() {
  return (
    <CardMedia
      sx={{
        position: "relative",
        width: "100%",
        height: 180,
        bgcolor: "#f5f5f5",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        overflow: "hidden",
      }}
      className="group"
    >
      <Link href={`/`}>
        <div className="h-[220px] overflow-hidden">
          <Image
            src="https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-2-202304220523.webp"
            alt="Saree"
            width={180}
            height={180}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            }}
          />
          <Image
            src={`https://serviceapi.spicezgold.com/download/1742462287665_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-1-202304220523.webp`}
            alt="Saree"
            width={180}
            height={180}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            }}
            className="transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      </Link>
      <span className="absolute top-[10px] left-[10px] flex items-center z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-medium">
        %15
      </span>

      <div className="absolute -top-[100%] -right-[50px] transition-all duration-300 ease-in-out z-50 flex flex-col items-center gap-2 w-[80%] group-hover:top-[10px] opacity-0 group-hover:opacity-100">
        {ACTIONS_BTN_PRODUCTS.map((action, idx) => (
          <Button
            key={idx + 200}
            sx={{ ...BtnActionStyle }}
            className="transition-colors group"
          >
            {action.icon}
          </Button>
        ))}
      </div>
    </CardMedia>
  );
}
