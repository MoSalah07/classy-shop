import React from "react";
import FooterHeading from "./FooterHeading";

export default function FooterList({
  title,
  list,
}: {
  title: string;
  list: string[];
}) {
  return (
    <div className=" basis-1/2 px-8 flex flex-col gap-y-4">
      <FooterHeading title={title} />
      <ul className="flex flex-col gap-y-2 xl:mb-12">
        {list.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-primary cursor-pointer text-sm font-medium text-subtext-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
