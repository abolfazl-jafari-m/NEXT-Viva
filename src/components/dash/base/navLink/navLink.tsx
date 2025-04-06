"use client"
import React, {ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface IProps {
    label: string,
    icon: ReactNode,
    href: string

}

function NavLink({label, href, icon}: IProps) {
    const pathName = usePathname();
    return (
        <li className={`hover:bg-darkChocolate px-7 py-3 cursor-pointer w-full text-white ${(pathName === href && "bg-darkChocolate text-primary rounded-r-full ")} `}>
            <Link href={href} className={"flex items-center gap-3 justify-between "}>
                <p className={"text-lg"}>{label}</p>
                {icon}
            </Link>
        </li>
    );
}

export default NavLink;