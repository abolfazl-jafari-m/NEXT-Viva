"use client"
import React from 'react';
import {getCookie} from "cookies-next/client";
import {FaUserCircle} from "react-icons/fa";
import Button from "@/components/shop/base/button/button";
import Link from "next/link";

function UserInfo() {
    const accessToken = getCookie("accessToken");
    return (
        <div>
            {
                accessToken
                    ? <FaUserCircle  size={24} />
                    :
                    <>
                        <div className={"flex items-center justify-center gap-3"}>
                            <Link href={"/login"}><Button className={"py-1 px-4 rounded-md bg-darkerGold text-white shadow shadow-black text-sm cursor-pointer"}>ورود</Button></Link>
                            <Link href={"/register"}><Button className={"py-1 px-4 rounded-md bg-darkerGold text-white shadow shadow-black text-sm cursor-pointer"}>ثبت نام</Button></Link>
                        </div>
                    </>
            }
        </div>
    );
}

export default UserInfo;