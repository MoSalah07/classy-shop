"use client";
import React from "react";
import style from "./search.module.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useLocale, useTranslations } from "next-intl";
import { getDirection } from "@/i18n/i18n-confige";

export default function Search() {
  const t = useTranslations("header");
  const locale = useLocale();
  const dir = getDirection(locale);
  const refSearch = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    refSearch?.current?.focus();
  }, []);

  return (
    <div
      className={`${style.search_box} w-full h-[50px] bg-[#e5e5e5] rounded-md relative p-2`}
    >
      <input
        ref={refSearch}
        type="text"
        placeholder={t("search")}
        className="h-[35px] w-full focus:outline-none bg-transparent p-2 text-base"
      />
      <Button
        variant="text"
        className={`!absolute top-2 ${
          dir === "ltr" ? "right-1.5" : "left-1.5"
        } z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black`}
      >
        <SearchIcon className="text-black text-[22px]" />
      </Button>
    </div>
  );
}
