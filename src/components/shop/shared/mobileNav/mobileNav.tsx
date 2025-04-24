"use client";
import React, {useState} from 'react';
import {BiMenu} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import Link from "next/link";
import Button from "@/components/shop/base/button/button";
import {useTranslations} from "next-intl";

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("header-shop");
    return (
        <div className={"hidden max-md:block"}>
             <BiMenu className={"text-3xl text-white cursor-pointer"} onClick={() => {setIsOpen(true)}}/>
            {isOpen &&
                (<nav className={"fixed h-screen flex flex-col justify-between top-0 min-w-2/5 shadow shadow-black left-0 bg-zinc-900 text-sm px-2 z-50"}>
                    <CgClose className={"absolute top-2 right-2 text-xl text-white cursor-pointer"} onClick={() => {setIsOpen(false)}}/>
                    <ul className={"flex flex-col w-full gap-5 px-5 py-1.5 mt-10"}>
                        <Link href="/">
                            <li className={"text-white font-light text-nowrap"}>{t("home")}</li>
                        </Link>
                        <Link href="/products">
                            <li className={"text-white font-light text-nowrap"}>{t("products")}</li>
                        </Link>
                        <Link href="/">
                            <li className={"text-white font-light text-nowrap"}>{t("about")}</li>
                        </Link>
                        <Link href="/">
                            <li className={"text-white font-light text-nowrap"}>{t("contact")}</li>
                        </Link>
                        <Link href="/">
                            <li className={"text-white font-light text-nowrap"}>{t("cart")}</li>
                        </Link>
                        <Link href="/">
                            <li className={"text-white font-light text-nowrap"}>{t("favorite")}</li>
                        </Link>
                    </ul>
                    <div className={"flex flex-col items-center w-full mb-5 gap-3"}>
                        <Button  className={"px-4 py-1 rounded-lg shadow shadow-black bg-darkerGold text-white text-nowrap w-full"}>{t("signIn")}</Button>
                        <Button  className={"px-4 py-1 rounded-lg shadow shadow-black bg-darkerGold text-white text-nowrap  w-full"}>{t("loginAcc")}</Button>
                    </div>
                </nav>)
            }
        </div>
    );
}

export default MobileNav;