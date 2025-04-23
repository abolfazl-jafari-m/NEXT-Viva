import React from 'react';
import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import Navbar from "@/components/shop/shared/navbar/navbar";
import HeaderAction from "@/components/shop/shared/haederAction/headerAction";

function Header() {
    return (
        <header className={"w-full px-12 max-lg:px-8 py-3 flex items-center justify-between absolute top-0 z-30"}>
            <Image src={Logo.src} alt={"logo"} width={96}  height={96} className={"max-lg:w-[80px]"}/>
            <Navbar />
            <HeaderAction />
            
        </header>
    );
}

export default Header;