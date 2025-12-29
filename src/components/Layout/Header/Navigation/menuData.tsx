import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Homepage", href: "/" },
  // { label: "Schedules", href: "/schedules" },
  // { label: "Speakers", href: "/speakers" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Resources/ Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" }
];  