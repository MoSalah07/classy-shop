import { ICategoryLinks, ILinks, INavigationLinks } from "@/types/data.type";

export const TOP_STRIP_LINKS: ILinks[] = [
  {
    title: "help",
    href: "/",
  },
  {
    title: "order",
    href: "/",
  },
];

export const NAVIGATION_LINKS: INavigationLinks[] = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "fashion",
    href: "/",
    nested: [
      {
        title: "women",
        href: "/",
        nested: [
          {
            title: "sarees",
            href: "/",
          },
          {
            title: "tops",
            href: "/",
          },
          {
            title: "jeans",
            href: "/",
          },
        ],
      },
      {
        title: "girls",
        href: "/",
        nested: [
          {
            title: "Kurtas & Sutis",
            href: "/",
          },
          {
            title: "tops",
            href: "/",
          },
        ],
      },
      {
        title: "mobile",
        href: "/",
        nested: [
          {
            title: "Apple",
            href: "/",
          },
          {
            title: "Samsung",
            href: "/",
          },
          {
            title: "oppo",
            href: "/",
          },
          {
            title: "vivo",
            href: "/",
          },
          {
            title: "techno",
            href: "/",
          },
        ],
      },
      {
        title: "men",
        href: "/",
      },
    ],
  },
  {
    title: "electronics",
    href: "/",
    nested: [
      {
        title: "laptops",
        href: "/",
      },
      {
        title: "smart watch",
        href: "/",
      },
    ],
  },
  {
    title: "bags",
    href: "/",
    nested: [
      {
        title: "men bags",
        href: "/",
      },
      {
        title: "women bags",
        href: "/",
      },
    ],
  },
  {
    title: "footwear",
    href: "/",
    nested: [
      {
        title: "men footwear",
        href: "/",
      },
      {
        title: "women footwear",
        href: "/",
      },
    ],
  },
  {
    title: "groceries",
    href: "/",
  },
  {
    title: "beauty",
    href: "/",
  },
  {
    title: "weliness",
    href: "/",
  },
  {
    title: "jewellery",
    href: "/",
  },
];

export const HOME_CATEGORY_SLIDER: ICategoryLinks[] = [
  {
    title: "fashion",
    href: "/",
    image: "/images/category/1.png",
  },
  {
    title: "electronics",
    href: "/",
    image: "/images/category/8.png",
  },
  {
    title: "bags",
    href: "/",
    image: "/images/category/7.png",
  },
  {
    title: "footwear",
    href: "/",
    image: "/images/category/6.png",
  },
  {
    title: "groceries",
    href: "/",
    image: "/images/category/5.png",
  },
  {
    title: "beauty",
    href: "/",
    image: "/images/category/4.png",
  },
  {
    title: "weliness",
    href: "/",
    image: "/images/category/3.png",
  },
  {
    title: "jewellery",
    href: "/",
    image: "/images/category/2.png",
  },
];
