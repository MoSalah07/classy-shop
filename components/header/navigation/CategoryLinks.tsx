import React, { useState } from "react";
import { Button } from "@mui/material";
import { INavigationLinks } from "@/types/data.type";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";

interface IProps {
  link: INavigationLinks;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CategoryLinks({ link, isOpen, onToggle }: IProps) {
  return (
    <CategoryItem link={link} isOpen={isOpen} onToggle={onToggle} depth={0} />
  );
}

interface CategoryItemProps {
  link: INavigationLinks;
  isOpen: boolean;
  onToggle: () => void;
  depth: number;
}

function CategoryItem({ link, isOpen, onToggle, depth }: CategoryItemProps) {
  const hasNested = !!link.nested?.length;
  const [openChildTitle, setOpenChildTitle] = useState<string | null>(null);

  const toggleChild = (title: string) => {
    setOpenChildTitle((prev) => (prev === title ? null : title));
  };

  return (
    <li className="flex flex-col w-full">
      <div className="flex items-center relative">
        <Button
          onClick={onToggle}
          className={`w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]`}
          style={{ paddingLeft: `${depth * 8 + 4}px` }}
        >
          {link.title}
        </Button>

        {hasNested && (
          <Button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="absolute right-2 !text-gray-700 !hover:text-black"
          >
            {isOpen ? <FaMinusSquare /> : <FaRegSquarePlus />}
          </Button>
        )}
      </div>

      {isOpen && hasNested && (
        <ul
          className="flex flex-col gap-1 mt-2"
          style={{ paddingLeft: `${(depth + 1) * 16}px` }}
        >
          {link.nested!.map((nestedLink, idx) => (
            <CategoryItem
              key={idx}
              link={nestedLink}
              isOpen={openChildTitle === nestedLink.title}
              onToggle={() => toggleChild(nestedLink.title)}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
