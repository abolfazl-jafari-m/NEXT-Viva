import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {MdDashboard, MdOutlineInventory, MdOutlineShoppingCartCheckout} from "react-icons/md";
import {TbPerfume} from "react-icons/tb";
import {FaUsers} from "react-icons/fa6";
import {CiLogout} from "react-icons/ci";

function Aside() {
    return (
        <>
            <div className={"h-full flex flex-col justify-between items-center"}>
                <div className={"flex flex-col gap-8 w-full"}>
                    <div className={"flex items-center justify-center "}>
                        <Image src={logo.src} alt={"logo"} width={72} height={72}/>
                        <h2 className={"text-white font-bold text-xl"}>پنل ادمین ویوا</h2>
                    </div>
                    <nav>
                        <ul className={"flex flex-col gap-4 "}>
                            <li className={"flex items-center hover:bg-darkChocolate text-white gap-3 justify-between px-7 py-3 cursor-pointer w-full "}>
                                <p className={"text-lg"}>داشبورد</p>
                                <MdDashboard/>
                            </li>
                            <li className={"flex items-center hover:bg-darkChocolate text-white gap-3 justify-between px-7 py-3 cursor-pointer w-full"}>
                                <p className={"text-lg"}>محصولات</p>
                                <TbPerfume/>
                            </li>
                            <li className={"flex items-center hover:bg-darkChocolate text-white gap-3 justify-between px-7 py-3 cursor-pointer w-full "}>
                                <p className={"text-lg"}>سفارشها</p>
                                <MdOutlineShoppingCartCheckout/>
                            </li>
                            <li className={"flex items-center hover:bg-darkChocolate text-white gap-3 justify-between px-7 py-3 cursor-pointer w-full"}>
                                <p className={"text-lg"}>موجودی</p>
                                <MdOutlineInventory/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button
                        className={"bg-darkChocolate w-full rounded-lg text-white text-center px-6 py-2 cursor-pointer flex items-center gap-2"}>
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