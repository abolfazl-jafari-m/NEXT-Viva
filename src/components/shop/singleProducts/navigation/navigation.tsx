import React from 'react';
import {TbListDetails} from "react-icons/tb";
import {MdInsertComment} from "react-icons/md";
import {FaCartArrowDown, FaDesktop} from "react-icons/fa6";
import Link from "next/link";

function Navigation() {
    return (
        <ul className={"fixed right-8 max-md:right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 max-sm:gap-3 z-20 text-white/60"}>

            <Link href={"#intro"}>
                <li>
                    <FaDesktop  className={"max-sm:text-sm"}/>
                </li>
            </Link>
            <Link href={"#details"}>
                <li>
                    <TbListDetails  className={"max-sm:text-sm"}/>
                </li>
            </Link>
            <Link href={"#addToCart"} className={"cursor-pointer"}>
                <li>
                    <FaCartArrowDown  className={"max-sm:text-sm"}/>
                </li>
            </Link>
            <Link href={"#comments"} className={"cursor-pointer"}>
                <li>
                    <MdInsertComment  className={"max-sm:text-sm"}/>
                </li>
            </Link>
        </ul>
    )
        ;
}

export default Navigation;