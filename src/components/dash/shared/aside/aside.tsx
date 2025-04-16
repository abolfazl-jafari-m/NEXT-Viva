import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {MdDashboard, MdOutlineInventory, MdOutlineShoppingCartCheckout} from "react-icons/md";
import {TbPerfume} from "react-icons/tb";
import NavLink from "@/components/dash/base/navLink/navLink";
import {useTranslations} from "next-intl";
import LogoutButton from "@/components/dash/shared/logoutButton/logoutButton";

function Aside() {
    const t = useTranslations("dashboardPage")
    return (
        <>
            <div className={"h-full flex flex-col justify-between items-center"}>
                <div className={"flex flex-col gap-8 w-full"}>
                    <div className={"flex items-center justify-center max-lg:flex-col"}>
                        <Image src={logo.src} alt={"logo"} width={72} height={72}/>
                        <h2 className={"text-white font-bold text-xl max-xl:text-lg"}>{t("vivaPanelAdmin")}</h2>
                    </div>
                    <nav>
                        <ul className={"flex flex-col gap-4 "}>
                            <NavLink label={t("dashboard")} icon={<MdDashboard/>} href={"/dashboard"}/>
                            <NavLink label={t("products")} icon={<TbPerfume/>} href={"/dashboard/products"}/>
                            <NavLink label={t("orders")} icon={<MdOutlineShoppingCartCheckout/>}
                                     href={"/dashboard/orders"}/>
                            <NavLink label={t("inventory")} icon={<MdOutlineInventory/>} href={"/dashboard/inventory"}/>
                        </ul>
                    </nav>
                </div>
                <div className={"max-lg:px-5 max-xl:px-2"}>
                    <LogoutButton/>
                </div>
            </div>
        </>
    );
}

export default Aside;