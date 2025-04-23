import React from 'react';
import NavLink from "@/components/shop/shared/navLink/navLink";
import {useTranslations} from "next-intl";

function Navbar() {
    const t = useTranslations("header-shop")
    return (
        <nav>
            <ul className={"flex items-center  gap-12 text-white text-xl"}>
                <NavLink href={"/"}>{t("home")}</NavLink>
                <NavLink href={"/products"}>{t("products")}</NavLink>
                <NavLink href={"/about"}>{t("about")}</NavLink>
                <NavLink href={"/contacts"}>{t("contact")}</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;