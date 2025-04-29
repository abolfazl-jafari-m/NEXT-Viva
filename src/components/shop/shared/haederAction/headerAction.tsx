"use client"
import React from 'react';
import {CgHeart} from "react-icons/cg";
import Search from "@/components/shop/shared/search/search";
import dynamic from "next/dynamic";
import CartItems from "@/components/shop/shared/cartItems/cartItems";
import Link from "next/link";

const UserInfo = dynamic(() => import( "@/components/shop/shared/userInfo/userInfo"), {ssr: false});

function HeaderAction() {
    return (
        <div className={"flex items-center gap-6 max-lg:gap-2  max-md:hidden text-gold"}>
            <Search/>
            <CartItems/>
            <Link href={"/wishlist"}><CgHeart size={24}/></Link>
            <UserInfo/>
        </div>
    );
}

export default HeaderAction;