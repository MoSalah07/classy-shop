import { INavigationLinks } from "@/types/data.type";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

interface IProps {
  link: INavigationLinks;
}

export default function NavigationLinks({ link }: IProps) {
  const hasNested = !!link.nested?.length;
  const t = useTranslations("header");

  return (
    <li className="relative capitalize flex flex-col justify-center group ">
      <Link href={link.href} className="links font-semibold text-sm">
        <Button
          sx={{
            fontSize: { md: "13px", lg: "15px" },
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "rgba(0,0,0,0.7)",
            "&:hover": {
              color: "#ff5252",
              backgroundColor: "transparent",
            },
            whiteSpace: "nowrap",
          }}
        >
          {t(link.title)}
        </Button>
      </Link>

      {hasNested && (
        <ul
          className="hidden lg:block pointer-events-none group-hover:pointer-events-auto absolute top-[35px] left-0 z-50 bg-white min-w-[180px] shadow-lg 
  opacity-0 invisible scale-95 translate-y-3 
  group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 
  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top-left"
        >
          {link.nested!.map((nestedLink, index) => (
            <NestedItem key={index} link={nestedLink} />
          ))}
        </ul>
      )}
    </li>
  );
}

function NestedItem({ link }: { link: INavigationLinks }) {
  const hasNested = !!link.nested?.length;
  const t = useTranslations("header");
  return (
    <li className="relative group/nested">
      <Link
        href={link.href}
        className="block text-sm text-gray-800 hover:bg-gray-100 whitespace-nowrap"
      >
        <Button
          sx={{
            fontSize: { md: "13px" },
            textTransform: "capitalize",
            fontWeight: "semibold",
            color: "rgba(0,0,0,0.7)",
            width: "100%",
            "&:hover": {
              color: "#ff5252",
              backgroundColor: "transparent",
            },
          }}
        >
          {t(link.title)}
        </Button>
      </Link>

      {hasNested && (
        <ul
          className="hidden lg:block absolute top-0 left-full z-50 bg-white min-w-[180px] shadow-lg 
  opacity-0 invisible scale-95 -translate-x-3 
  group-hover/nested:opacity-100 group-hover/nested:visible group-hover/nested:scale-100 group-hover/nested:translate-x-0 
  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top-left"
        >
          {link.nested!.map((nestedLink, idx) => (
            <NestedItem key={idx} link={nestedLink} />
          ))}
        </ul>
      )}
    </li>
  );
}
