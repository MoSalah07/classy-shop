import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";
import { TOP_STRIP_LINKS } from "@/constant/data";
import LangSwitcher from "./LangSwitcher";

export default async function TopStrip() {
  const t = await getTranslations("header");
  return (
    <div className="py-2 w-full border-t border-b border-gray-300 desktop-only">
      <div className="main-container ">
        <div className="flex-between">
          <div className=" basis-1/2">
            <p className="text-sm font-normal">{t("offer")}</p>
          </div>
          <div className="">
            <ul className="flex items-center gap-4">
              {TOP_STRIP_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link className="links text-sm" href={link.href}>
                    {t(link.title)}
                  </Link>
                </li>
              ))}
              <li>
                <LangSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
