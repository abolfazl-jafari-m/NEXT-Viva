"use client"
import React, {useState} from 'react';
import {deleteCookie, getCookie} from "cookies-next/client";
import {FaUserCircle} from "react-icons/fa";
import Button from "@/components/shop/base/button/button";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {IoExit} from "react-icons/io5";
import {useRouter} from "next/navigation";

function UserInfo() {
    const t = useTranslations("header-shop")
    const accessToken = getCookie("accessToken");
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div>
            {
                accessToken
                    ? <div className={"relative"}>
                        <FaUserCircle size={24} className={"cursor-pointer"} onClick={() => setIsOpen(!isOpen)}/>
                        {isOpen && <button
                            className={"absolute top-10  bg-gold rounded-full shadow shadow-black left-0 p-1 text-white/70 cursor-pointer"} onClick={() => {
                            deleteCookie("accessToken");
                            router.refresh();
                        }}>
                            <IoExit size={18}/>
                        </button>}
                    </div>
                    :
                    <>
                        <div className={"flex items-center justify-center gap-3"}>
                            <Link href={"/login"}><Button
                                className={"py-1 px-4 rounded-md bg-darkerGold text-white shadow shadow-black text-sm cursor-pointer"}>{t("login")}</Button></Link>
                            <Link href={"/register"}><Button
                                className={"py-1 px-4 rounded-md bg-darkerGold text-white shadow shadow-black text-sm cursor-pointer"}>{t("signIn")}</Button></Link>
                        </div>
                    </>
            }
        </div>
    );
}

export default UserInfo;