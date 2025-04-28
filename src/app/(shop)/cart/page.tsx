import React from 'react';
import CartSummery from "@/components/shop/cart/cartSummery/cartSummery";
import CartItems from "@/components/shop/cart/cartItems/cartItems";
import {useTranslations} from "next-intl";

export const metadata = {
    title : "ویوا عطر | سبد خرید"
}

function Cart() {
    const t = useTranslations("cart");
    return (
        <div className={"w-full min-h-screen grid grid-cols-6 max-md:grid-cols-1 p-30 grid-rows-6 max-2xl:px-10 max-sm:px-5 max-sm:py-20 gap-10 max-lg:gap-5"}>
            <div className={"col-span-full flex items-center row-span-1"}>
                <h1 className={"text-3xl font-semibold text-white max-sm:text-xl"}>{t("title")}</h1>
            </div>
            <CartItems />
            <CartSummery />
        </div>
    );
}

export default Cart;