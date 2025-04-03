import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import GoupBtn from "@/components/shop/shared/goupBtn/goupBtn";


function Footer() {
    return (
        <footer className={"w-full py-2  flex items-center justify-around "}>
            <div>
                <Image src={logo.src} alt={"logo"} width={72} height={72}/>
            </div>
            <div className={"flex flex-col gap-3 items-center justify-center"}>
                <ul className={"w-full flex items-center gap-12 list-disc text-darkerGold justify-center"}>
                    <li>خانه</li>
                    <li>محصولات</li>
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                </ul>
                <p className={"text-white "} dir={"ltr"}><span
                    className={"text-lg text-gold mx-3 font-mono"}>@NV Design</span>طراحی توسط تیم </p>
            </div>
           <GoupBtn/>
        </footer>
    );
}

export default Footer;