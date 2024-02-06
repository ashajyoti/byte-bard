'use client'
import React from "react";
import { useAuthContext } from '@/context/AuthContext';
import { NavbarContent, NavbarItem, Link, Button, User } from "@nextui-org/react";

export default function UserLogginedIn() {
    const { user } = useAuthContext()
    return (
        <NavbarContent justify="end">
            {user ? <>
                <NavbarItem>
                    <User
                        name={user.email}
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                    />
                </NavbarItem>
                <NavbarItem>
                        <Button as={Link} color="primary" href="/" variant="flat">
                            Sign Out
                        </Button>
                    </NavbarItem>
            </>
                :


                <>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="/login">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/signup" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </>}
        </NavbarContent>
    );
}