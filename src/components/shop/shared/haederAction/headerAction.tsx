"use client"
import React from 'react';
import {CgHeart, CgShoppingCart} from "react-icons/cg";
import Search from "@/components/shop/shared/search/search";
import dynamic from "next/dynamic";
const UserInfo = dynamic(()=>import( "@/components/shop/shared/userInfo/userInfo"), {ssr: false});

function HeaderAction() {
    return (
        <div className={"flex items-center gap-6 max-lg:gap-2  max-sm:hidden text-gold/70"}>
            <Search />
            <CgShoppingCart  size={24}/>
            <CgHeart size={24} />
           <UserInfo />
        </div>
    );
}

export default HeaderAction;