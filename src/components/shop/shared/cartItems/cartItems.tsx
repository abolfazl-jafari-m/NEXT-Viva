"use client";
import React from 'react';
import {CgShoppingCart} from "react-icons/cg";
import Link from "next/link";
import {useCartStore} from "@/lib/providers/CartStoreProivder";

function CartItems() {
    const cartItems = useCartStore((state)=>state.cartItems);
    return (
        <Link href={"/cart"} className={"relative"}>
            <CgShoppingCart size={24}/>
            {cartItems.length > 0 && <span
                className={"absolute -top-1 -right-2 bg-rose-600 text-xs w-4 h-4 text-white p-0.5 flex items-center justify-center rounded-full"}>{cartItems.length}</span>}
        </Link>
    );
}

export default CartItems;