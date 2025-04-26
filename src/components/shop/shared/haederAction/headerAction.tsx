"use client"
import React from 'react';
import {CgHeart} from "react-icons/cg";
import Search from "@/components/shop/shared/search/search";
import dynamic from "next/dynamic";
import CartItems from "@/components/shop/shared/cartItems/cartItems";

const UserInfo = dynamic(() => import( "@/components/shop/shared/userInfo/userInfo"), {ssr: false});

function HeaderAction() {
    return (
        <div className={"flex items-center gap-6 max-lg:gap-2  max-md:hidden text-gold"}>
            <Search/>
            <CartItems />
            <CgHeart size={24}/>
            <UserInfo/>
        </div>
    );
}

export default HeaderAction;