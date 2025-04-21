"use client"
import React, {ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function NavLink({href, children}: { href: string, children: ReactNode }) {
    const pathname = usePathname();
    return (
        <li className={` p-2 hover:text-gold after:content-[] after:h-0.5 after:bg-gold after:absolute relative after:top-11 after:right-0 after:w-0 hover:after:w-full after:transition-all duration-700 ${pathname === href ? "text-darkerGold" : "text-white"}`}>
            <Link href={href} className={"w-full cursor-pointer"}>
                {children}
            </Link>
        </li>
    );
}

export default NavLink;