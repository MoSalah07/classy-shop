import {
  IAdsBanners,
  IAdsImagesBanners,
  IBlogsBanner,
  ICategoryLinks,
  ILinks,
  INavigationLinks,
} from "@/types/data.type";

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

export const ADDS_BANNER: IAdsBanners[] = [
  {
    id: "buy women",
    title: "But women products with low price",
    price: 999,
    href: "/",
    image: "/images/ads_banners/1.jpg",
  },
  {
    id: "buy mens",
    title: "buy mens Bags with low price",
    price: 900,
    href: "/",
    image: "/images/ads_banners/2.jpg",
  },
  {
    id: "buy apple",
    title: "Buy Apple Iphone",
    price: 45000,
    href: "/",
    image: "/images/ads_banners/3.jpg",
  },
  {
    id: "buy footwear",
    title: "Buy Mens Footwear with low price",
    price: 1500,
    href: "/",
    image: "/images/ads_banners/4.jpg",
  },
];

export const IMAGES_ADDS_BANNER: IAdsImagesBanners[] = [
  {
    href: "/",
    image: "/images/ads_banners/1.webp",
  },
  {
    href: "/",
    image: "/images/ads_banners/2.webp",
  },
  {
    href: "/",
    image: "/images/ads_banners/3.webp",
  },
  {
    href: "/",
    image: "/images/ads_banners/4.webp",
  },
];

export const Home_TABS: ILinks[] = [
  {
    title: "fashion",
    href: "/",
  },
  {
    title: "electronics",
    href: "/",
  },
  {
    title: "bags",
    href: "/",
  },
  {
    title: "footwear",
    href: "/",
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

export const BLOGS_BANNER: IBlogsBanner[] = [
  {
    image: "/images/blogs/1.jpg",
    title: "sustainable living through cutting-edge prefabricated homes",
    href: "/",
    description:
      "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
  },
  {
    image: "/images/blogs/2.jpg",
    title:
      "Explore sustainable living through cutting-edge prefabricated homes",
    href: "/",
    description:
      "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
  },
  {
    image: "/images/blogs/3.jpg",
    title: "This prefabrice passive house is highly sustainable",
    href: "/",
    description:
      "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
  },
  {
    image: "/images/blogs/1.jpg",
    title: "This prefabrice passive house is memorable highly sustainable",
    href: "/",
    description:
      "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...",
  },
];

export const LIST_FOOTER_ONE: string[] = [
  "Prices drop",
  "New products",
  "Best sales",
  "Contact us",
  "Sitemap",
  "Stores",
];

export const LIST_FOOTER_TWO: string[] = [
  "Delivery",
  "Legal Notice",
  "Terms and conditions of use",
  "About us",
  "Secure payment",
  "Login",
];
