import React from 'react';
import {TbListDetails} from "react-icons/tb";
import {MdInsertComment} from "react-icons/md";
import {FaCartArrowDown, FaDesktop} from "react-icons/fa6";
import Link from "next/link";

function Navigation() {
    return (
        <ul className={"fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-20 text-white/60"}>

            <Link href={"#intro"}>
                <li>
                    <FaDesktop size={18}/>
                </li>
            </Link>
            <Link href={"#details"}>
                <li>
                    <TbListDetails size={18}/>
                </li>
            </Link>
            <Link href={"#addToCart"} className={"cursor-pointer"}>
                <li>
                    <FaCartArrowDown size={18}/>
                </li>
            </Link>
            <Link href={"#comments"} className={"cursor-pointer"}>
                <li>
                    <MdInsertComment size={18}/>
                </li>
            </Link>
        </ul>
    )
        ;
}

export default Navigation;