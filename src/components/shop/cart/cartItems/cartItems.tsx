"use client";
import React from 'react';
import CartProductCard from "@/components/shop/cart/cartProductCard/cartProductCard";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {useTranslations} from "next-intl";

function CartItems() {
    const t = useTranslations("cart");
    const cartItems = useCartStore((state)=>state.cartItems);
    return (
        <div className={"col-span-4 max-md:col-span-full row-span-5 flex flex-col gap-5 bg-primary light:bg-secondary ring-2 ring-zinc-800 rounded-lg shadow shadow-black p-5 max-sm:p-2"}>
            {
                cartItems.length > 0 ?
                cartItems.map((cartItem) => (<CartProductCard key={cartItem.id} cartItem={cartItem} />))
                    :
                    <div className={"w-full h-full flex items-center justify-center"}>
                        <p className={"text-xl text-white font-semibold text-center max-sm:text-lg"}>{t("noCartItems")}</p>
                    </div>
            }

        </div>
    );
}

export default CartItems;