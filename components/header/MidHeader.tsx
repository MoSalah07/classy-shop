"use client";
import React from "react";
import Search from "./Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import HeaderIcon from "./HeaderIcon";
import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function MidHeader() {
  const t = useTranslations("header");
  return (
    <nav className="main-container border-b border-gray-300 flex-between h-[10vh]">
      <div className="mobile-only">
        <HeaderIcon
          title={t("menu")}
          icon={<MenuIcon />}
          count={4}
          ariaLabel="cart"
          tooltipOffset={[0, -8]}
        />
      </div>
      <Logo />
      <div className="basis-[45%] desktop-only">
        <Search />
      </div>
      <div className="lg:basis-[35%] flex items-center justify-end">
        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-3.5 ">
          <li className="">
            <Link href={`/login`} className="links text-[15px] font-medium">
              {t("login")}
            </Link>{" "}
            |{" "}
            <Link href={`/register`} className="links text-[15px] font-medium">
              {t("register")}
            </Link>
          </li>
          <HeaderIcon
            title={t("compare")}
            icon={<IoGitCompareOutline />}
            count={4}
            isCount
            ariaLabel="compare"
            tooltipOffset={[0, -8]}
          />
          <HeaderIcon
            title={t("wishlist")}
            icon={<FaRegHeart />}
            count={4}
            isCount
            ariaLabel="wishlist"
            tooltipOffset={[0, -8]}
          />
          <HeaderIcon
            title={t("cart")}
            icon={<ShoppingCartIcon />}
            count={4}
            isCount
            ariaLabel="cart"
            tooltipOffset={[0, -8]}
          />
        </ul>
        {/* Mobile */}
        <ul className="mobile-only">
          <HeaderIcon
            title={t("cart")}
            icon={<ShoppingCartIcon />}
            count={4}
            isCount
            ariaLabel="cart"
            tooltipOffset={[0, -8]}
          />
        </ul>
      </div>
    </nav>
  );
}
