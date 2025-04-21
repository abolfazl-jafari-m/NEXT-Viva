"use client"
import React from 'react';
import {CgHeart, CgShoppingCart} from "react-icons/cg";
import Search from "@/components/shop/shared/search/search";
import UserInfo from "@/components/shop/shared/userInfo/userInfo";

function HeaderAction() {
    return (
        <div className={"flex items-center gap-6 text-gold/70"}>
            <Search />
            <CgShoppingCart  size={24}/>
            <CgHeart size={24} />
           <UserInfo />
        </div>
    );
}

export default HeaderAction;