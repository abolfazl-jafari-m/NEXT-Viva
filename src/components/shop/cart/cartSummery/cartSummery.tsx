"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import Link from "next/link";
import DiscountCheck from "@/components/shop/cart/discountCheck/discountCheck";
import {useTranslations} from "next-intl";

function CartSummery() {
    const t = useTranslations("cart");
    const cartItems = useCartStore((state) => state.cartItems);
    const discount = useCartStore((state) => state.discount);
    const total = cartItems.reduce((prevValue, item) => (+item.price * +item.quantity) + prevValue, 0);
    const finalPrice = total - (total*(discount/100));
    return (
        <div
            className={"col-span-2 max-md:col-span-full rounded-lg bg-primary p-4 row-span-5 ring-2 ring-zinc-800 shadow-lg shadow-black flex flex-col gap-6 text-white"}>
            <h3 className={" font-semibold text-2xl max-sm:text-xl"}>{t("yourCart")}</h3>
            <hr className={" w-full"}/>
            <div className={"flex items-center justify-between max-lg:flex-col max-lg:gap-2 max-md:flex-row"}>
                <h4>{t("totalPrice")}</h4>
                <p>{total} {t("currency")}</p>
            </div>
            <div className={"flex items-center justify-between"}>
                <h4>{t("productsCount")}</h4>
                <p>{cartItems.length}</p>
            </div>
            <div className={"flex items-center justify-between"}>
                <h4>{t("discount")}</h4>
                <p>{discount} %</p>
            </div>
            <div className={"flex flex-col gap-3"}>
                <h4>{t("discountCode")}</h4>
              <DiscountCheck  />
            </div>
            {cartItems.length > 0 &&<div className={"mt-auto w-full flex flex-col gap-2 max-sm:gap-4"}>
                <div className={"flex items-center justify-between text-lg px-3 max-lg:flex-col max-lg:gap-4 max-md:flex-row"}>
                    <h3>{t("finalPrice")}</h3>
                    <p>{finalPrice}</p>
                </div>
                <Link href={"/checkout"}>
                    <Button type={"button"}
                            className={" w-full py-2 rounded-lg bg-darkChocolate shadow shadow-black cursor-pointer"}>
                        {t("checkout")}
                    </Button>
                </Link>
            </div>}
        </div>
    );
}

export default CartSummery;