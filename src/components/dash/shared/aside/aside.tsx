import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {MdDashboard, MdOutlineInventory, MdOutlineShoppingCartCheckout} from "react-icons/md";
import {TbPerfume} from "react-icons/tb";
import {CiLogout} from "react-icons/ci";
import NavLink from "@/components/dash/base/navLink/navLink";

function Aside() {
    return (
        <>
            <div className={"h-full flex flex-col justify-between items-center"}>
                <div className={"flex flex-col gap-8 w-full"}>
                    <div className={"flex items-center justify-center max-lg:flex-col"}>
                        <Image src={logo.src} alt={"logo"} width={72} height={72}/>
                        <h2 className={"text-white font-bold text-xl max-xl:text-lg"}>پنل ادمین ویوا</h2>
                    </div>
                    <nav>
                        <ul className={"flex flex-col gap-4 "}>
                            <NavLink label={"داشبورد"} icon={<MdDashboard/>} href={"/dashboard"}/>
                            <NavLink label={"محصولات"} icon={<TbPerfume/>} href={"/dashboard/products"}/>
                            <NavLink label={"سفارشها"} icon={<MdOutlineShoppingCartCheckout/>}
                                     href={"/dashboard/orders"}/>
                            <NavLink label={"موجودی"} icon={<MdOutlineInventory/>} href={"/dashboard/inventory"}/>
                        </ul>
                    </nav>
                </div>
                <div className={"max-lg:px-5 max-xl:px-2"}>
                    <button
                        className={"bg-darkChocolate w-full rounded-lg text-white text-center px-6 py-2 cursor-pointer flex items-center gap-2 max-lg:gap-2 max-lg:px-3 max-lg:text-sm"}>
                        <span>
                        خروج از حساب کاربری
                        </span>
                        <CiLogout/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Aside;