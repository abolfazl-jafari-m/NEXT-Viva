"use client"
import React, {ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface IProps {
    label: string,
    icon: ReactNode,
    href: string

}

function MobileNavLink({label, href, icon}: IProps) {
    const pathName = usePathname();
    return (
        <li className={`hover:bg-darkChocolate rounded-full  px-2 py-1 group  cursor-pointer w-full  text-white ${(pathName === href && "bg-darkChocolate text-primary ")} `}>
            <Link href={href} className={"flex items-center gap-3 justify-center "}>
                <p className={`${(pathName !== href && "hidden group-hover:block ")}`}>{label}</p>
                {icon}
            </Link>
        </li>
    );
}

export default MobileNavLink;