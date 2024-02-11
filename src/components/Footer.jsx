import { Link } from "@nextui-org/react";
import React from 'react';
import { footerData as FooterData } from '../Data/pageData';


const Footer = () => {
  const { icons } = FooterData;
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Byte Bard</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {icons.map((item, index) => (
          <li className="me-4 md:me-6"><Link className="hover:underline" to={item.url} key={index}>{item.icon}</Link></li>
        ))}
      </ul>
    </footer>

  );
};

export default Footer;