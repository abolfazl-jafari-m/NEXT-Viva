"use client";
import React, {useState} from 'react';
import {BiMenu} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import Link from "next/link";
import Button from "@/components/shop/base/button/button";
import {useTranslations} from "next-intl";
import {AnimatePresence, motion} from "motion/react";
import Search from "@/components/shop/shared/search/search";
import ThemeButton from "@/components/shop/shared/themeButton/themeButton";
import {FaHome} from "react-icons/fa";
import {GiDelicatePerfume} from "react-icons/gi";
import {FaCartShopping, FaCircleInfo, FaHeart} from "react-icons/fa6";
import {MdOutlineContactSupport} from "react-icons/md";

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("header-shop");
    return (
        <div className={"hidden max-md:flex flex-row-reverse items-center gap-2"}>
            <BiMenu className={"text-3xl text-white cursor-pointer light:text-black"} onClick={() => {
                setIsOpen(true)
            }}/>
            <Search/>
            <ThemeButton/>
            <AnimatePresence>
                {isOpen &&
                    (<motion.nav initial={{width: 0}} animate={{width: "100%"}} exit={{width: 0}}
                                 transition={{duration: 0.4, ease: "easeOut"}}
                                 className={"fixed h-screen flex flex-col justify-between top-0 shadow shadow-black left-0 bg-zinc-900 text-sm px-2 z-50"}>
                        <CgClose className={"absolute top-2 right-2 text-xl text-white cursor-pointer"} onClick={() => {
                            setIsOpen(false)
                        }}/>
                        <ul className={"flex flex-col w-full gap-5 px-5 py-1.5 mt-14"}>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="/">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                    <span> {t("home")}</span>
                                    <FaHome/>
                                </li>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="/products">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                    <span>{t("products")}</span>
                                    <GiDelicatePerfume/>
                                </li>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="/about">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                    <span>{t("about")}</span>
                                    <FaCircleInfo/>
                                </li>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="contact/">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                    <span>{t("contact")}</span>
                                    <MdOutlineContactSupport/>
                                </li>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="/cart">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                    <span> {t("cart")}</span>
                                    <FaCartShopping/>
                                </li>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href="/wishlist">
                                <li className={"text-white font-light text-nowrap flex items-center justify-between"}>
                                  <span>  {t("favorite")}</span>
                                    <FaHeart />
                                </li>
                            </Link>
                        </ul>
                        <div className={"flex flex-col items-stretch w-full mb-14 gap-3 px-4"}>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href={"/register"}> <Button
                                className={"px-4 py-1 rounded-lg shadow shadow-black bg-darkerGold text-white text-nowrap w-full"}>{t("signIn")}</Button>
                            </Link>
                            <Link onClick={() => {
                                setIsOpen(false)
                            }} href={"/login"}>
                                <Button
                                    className={"px-4 py-1 rounded-lg shadow shadow-black bg-darkerGold text-white text-nowrap  w-full"}>{t("loginAcc")}</Button>
                            </Link>
                        </div>
                    </motion.nav>)
                }
            </AnimatePresence>
        </div>
    );
}

export default MobileNav;