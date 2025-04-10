import React from 'react';

import {MdDashboard, MdOutlineInventory, MdOutlineShoppingCartCheckout} from "react-icons/md";
import {TbPerfume} from "react-icons/tb";
import MobileNavLink from "@/components/dash/base/moblieNavLink/mobileNavLink";

function MobileNav() {
    return (
        <div className={"fixed hidden bottom-0 left-0 w-full p-3  max-md:block"}>
            <nav className={"bg-primary rounded-full w-full "}>
                <ul className={"flex items-center justify-between gap-4 px-3 py-2"}>
                    <MobileNavLink label={"داشبورد"} icon={<MdDashboard/>} href={"/dashboard"}/>
                    <MobileNavLink label={"محصولات"} icon={<TbPerfume/>} href={"/dashboard/products"}/>
                    <MobileNavLink label={"سفارشها"} icon={<MdOutlineShoppingCartCheckout/>}
                             href={"/dashboard/orders"}/>
                    <MobileNavLink label={"موجودی"} icon={<MdOutlineInventory/>} href={"/dashboard/inventory"}/>
                </ul>
            </nav>
        </div>
    );
}

export default MobileNav;