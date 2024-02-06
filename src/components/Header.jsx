import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, User} from "@nextui-org/react";
import { headerData } from "@/Data/pageData";
import UserLogginedIn from "./userLoggedIn";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <div className='logo'>
        <Link to={"/"}>
          <img src={headerData.logo.icon} alt={headerData.logo.alt} width={headerData.logo.width}/>
        </Link>
      </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {headerData.navItems.map(item => (
            <NavbarItem><Link href={item.href}>{item.title}</Link></NavbarItem> 
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
      <UserLogginedIn />
      </NavbarContent>
    </Navbar>
  );
}
