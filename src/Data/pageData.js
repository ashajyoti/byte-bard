import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const headerData = {
    logo: {
      icon: '/assets/logo.png' ,
      alt: "company logo",
      width: 100,
    },
    navItems: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "featured",
        href: "/featured",
      },
    ],
};

export const footerData = {
  icons: [
    { icon: <FaFacebook />, url: "/" },
    { icon: <FaTwitter />, url: "/" },
    { icon: <FaInstagram />, url: "/" },
  ],
};