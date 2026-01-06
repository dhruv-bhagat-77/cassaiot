import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Homepage", href: "/" },
  // { label: "Schedules", href: "/schedules" },
  // { label: "Speakers", href: "/speakers" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Vision", href: "/solutions/vision" },
      { label: "Robots", href: "/solutions/robots" },
    ]
  },
  { 
    label: "Resources/ Blogs", 
    href: "/blog",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" }
];  