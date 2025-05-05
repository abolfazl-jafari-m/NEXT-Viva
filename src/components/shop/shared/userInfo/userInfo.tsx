"use client"
import React, {useState} from 'react';
import {deleteCookie, getCookie} from "cookies-next/client";
import {FaUserCircle} from "react-icons/fa";
import Button from "@/components/shop/base/button/button";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {IoExit} from "react-icons/io5";
import {useRouter} from "next/navigation";
import {AnimatePresence} from "motion/react";
import {motion} from "motion/react";

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
                        <AnimatePresence>
                            {isOpen && <motion.ul initial={{opacity : 0 , scale : 0}} exit={{opacity : 0, scale : 0}} animate={{opacity : 1, scale : 1}} transition={{duration : 0.3 ,when : "afterChildren" }}
                                                  className={"absolute top-11 left-0 rounded-md shadow shadow-black bg-white text-black text-nowrap flex flex-col gap-3 overflow-hidden"}>
                                <motion.li initial={{y : -100}} exit={{y : -100}} animate={{y : 0}} transition={{stiffness : 1000}} className={"p-2 hover:bg-gold hover:text-white cursor-pointer"}>{t("profile")}</motion.li>
                                <motion.li initial={{y : -100}} exit={{y : -100}} animate={{y : 0}} transition={{stiffness : 1000}}  className={"p-2 cursor-pointer flex items-center gap-6 hover:bg-gold hover:text-white"}
                                       onClick={() => {
                                           deleteCookie("accessToken");
                                           router.refresh();
                                       }}>
                                    <p>{t("exit")}</p>
                                    <IoExit size={18}/>
                                </motion.li></motion.ul>}
                        </AnimatePresence>
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