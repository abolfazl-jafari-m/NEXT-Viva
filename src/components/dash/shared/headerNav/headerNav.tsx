"use client";
import React from 'react';
import {IoIosSettings} from "react-icons/io";
import {BiSolidBellRing} from "react-icons/bi";
import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import("@/components/dash/shared/userInfo/userInfo"), {ssr: false})

function HeaderNav() {
    return (
        <ul className={"flex items-center gap-3"}>
            <UserInfo/>
            <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl"}>
                <IoIosSettings/>
            </li>
            <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl"}>
                <BiSolidBellRing/>
            </li>
        </ul>
    );
}

export default HeaderNav;