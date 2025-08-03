"use client";
import { NAVIGATION_LINKS } from "@/constant/data";
import { Button } from "@mui/material";
import React, { useState, useCallback } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { RiMenu2Fill } from "react-icons/ri";
import NavigationLinks from "./NavigationLinks";
import CategoryPanel from "./CategoryPanel";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations("header");
  const toggleDrawer = useCallback(
    (newOpen: boolean) => () => {
      setOpen(newOpen);
    },
    []
  );

  // render
  const renderNavigationLinks = NAVIGATION_LINKS.map((link, idx) => (
    <NavigationLinks key={idx} link={link} />
  ));

  return (
    <>
      <nav className="py-2">
        <div className="main-container flex items-center justify-between gap-5">
          <div className="hidden lg:block lg:basis-1/4">
            <Button
              onClick={toggleDrawer(true)}
              sx={{
                fontSize: { md: "12px", lg: "15px" },
                color: "black",
                backgroundColor: "transparent",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              className=" gap-3 !font-semibold w-full !px-0"
            >
              <RiMenu2Fill className="text-lg" />
              {t("shop")}
              <LiaAngleDownSolid className="font-bold mb-[2px] text-sm" />
            </Button>
          </div>
          <div className="basis-full lg:basis-1/2 overflow-x-auto lg:overflow-visible">
            <ul className="flex items-center gap-3 ">
              {renderNavigationLinks}
            </ul>
          </div>
          <div className="basis-[20%] hidden xl:flex items-center gap-2">
            <RocketLaunchIcon />
            <p className=" lg:text-[12px] xl:text-sm font-medium">
              {t("delivery")}
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
