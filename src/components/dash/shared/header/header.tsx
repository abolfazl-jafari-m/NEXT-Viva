import React from 'react';
import {IoIosSettings} from "react-icons/io";
import {BiSolidBellRing} from "react-icons/bi";
import {FaUser} from "react-icons/fa6";

function Header() {
    return (
        <>
            <div className={"flex items-center justify-between py-2 px-9 w-full"}>
                <div>
                    <h1 className={"text-2xl font-bold"}>داشبورد</h1>
                </div>
                <ul className={"flex items-center gap-3"}>
                    <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl"}>
                        <IoIosSettings />
                    </li>
                    <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl"}>
                        <BiSolidBellRing />
                    </li>
                    <li className={"rounded-lg bg-darkChocolate text-white p-2 shadow shadow-black text-xl"}>
                        <FaUser />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;