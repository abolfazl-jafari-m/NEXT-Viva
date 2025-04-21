import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import NavLink from "@/components/shop/shared/navLink/navLink";


function Footer() {
    return (
        <footer className={"w-full py-3  flex items-center flex-col gap-2 px-10 text-white bg-linear-120 from-10% from-zinc-950 via-50% via-primary to-90% to-black"}>
            <div className={"flex justify-between items-center w-full px-4"}>
                <div className={"flex flex-col gap-2"}>
                    <Image src={logo.src} alt={"logo"} width={72} height={72}/>
                    <p className={"text-white text-sm"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                        fugiat.</p>
                </div>
                <ul className={"flex items-center gap-2 text-darkerGold justify-evenly"}>
                    <NavLink href={"/"}>خانه</NavLink>
                    <NavLink href={"/products"}>محصولات</NavLink>
                    <NavLink href={"/about"}>درباره ما</NavLink>
                    <NavLink href={"/contacts"}>تماس با ما</NavLink>
                </ul>
            </div>
            <hr className={"text-secondary/30 w-full h-0.5"}/>
            <div className={"flex flex-col gap-3 items-center justify-center flex-1"}>
                <p className={"text-white "} dir={"ltr"}><span
                    className={"text-lg text-gold mx-3 font-fuzzy"}>@NV Design</span>طراحی توسط تیم </p>
            </div>
        </footer>
    );
}

export default Footer;