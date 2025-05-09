"use client";
import React from 'react';
import {IoIosSettings} from "react-icons/io";
import {BiSolidBellRing} from "react-icons/bi";
import dynamic from "next/dynamic";
import LogoutButton from "@/components/dash/shared/logoutButton/logoutButton";

const UserInfo = dynamic(() => import("@/components/dash/shared/userInfo/userInfo"), {ssr: false})

function HeaderNav() {
    return (
        <ul className={"flex items-center gap-1.5"}>
            <UserInfo/>
            <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl max-sm:text-sm max-sm:p-1.5"}>
                <IoIosSettings/>
            </li>
            <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl  max-sm:text-sm max-sm:p-1.5"}>
                <BiSolidBellRing/>
            </li>
            <li className={"md:hidden rounded-lg bg-darkChocolate text-white  py-3 px-1 shadow shadow-black text-xl  max-sm:text-sm max-sm:p-1.5"}>
                <LogoutButton/>
            </li>
        </ul>
    );
}

export default HeaderNav;