import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import NavLink from "@/components/shop/shared/navLink/navLink";
import {useTranslations} from "next-intl";


function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className={"w-full py-3  flex items-center flex-col gap-2 px-10 max-sm:px-3 text-white"}>
            <div className={"flex justify-between items-center w-full px-4 max-md:flex-col"}>
                <div className={"flex flex-col gap-2 max-md:items-center"}>
                    <Image src={logo.src} alt={"logo"} width={72} height={72}/>
                    <p className={"text-white text-sm"}>{t("footerText")}</p>
                </div>
                <ul className={"flex items-center gap-2 text-darkerGold justify-evenly"}>
                    <NavLink href={"/"}>{t("home")}</NavLink>
                    <NavLink href={"/products"}>{t("products")}</NavLink>
                    <NavLink href={"/about"}>{t("about")}</NavLink>
                    <NavLink href={"/contacts"}>{t("contact")}</NavLink>
                </ul>
            </div>
            <hr className={"text-secondary/30 w-full h-0.5"}/>
            <div className={"flex flex-col gap-3 items-center justify-center flex-1"}>
                <p className={"text-white "} dir={"ltr"}><span
                    className={"text-lg max-sm:text-sm text-gold mx-3 font-fuzzy"}>@NV Design</span>{t("designedBy")} </p>
            </div>
        </footer>
    );
}

export default Footer;