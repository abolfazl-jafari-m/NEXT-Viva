import React from 'react';
import CartSummery from "@/components/shop/cart/cartSummery/cartSummery";
import CartItems from "@/components/shop/cart/cartItems/cartItems";
import {useTranslations} from "next-intl";

function Cart() {
    const t = useTranslations("cart");
    return (
        <div className={"w-full min-h-screen grid grid-cols-6 p-30 grid-rows-6 gap-10"}>
            <div className={"col-span-full flex items-center row-span-1"}>
                <h1 className={"text-3xl font-semibold text-white"}>{t("title")}</h1>
            </div>
            <CartItems />
            <CartSummery />
        </div>
    );
}

export default Cart;