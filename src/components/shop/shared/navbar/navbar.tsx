import React from 'react';
import NavLink from "@/components/shop/shared/navLink/navLink";

function Navbar() {
    return (
        <nav>
            <ul className={"flex items-center  gap-12 text-white text-xl"}>
                <NavLink href={"/"}>خانه</NavLink>
                <NavLink href={"/products"}>محصولات</NavLink>
                <NavLink href={"/about"}>درباره ما</NavLink>
                <NavLink href={"/contacts"}>تماس با ما</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;