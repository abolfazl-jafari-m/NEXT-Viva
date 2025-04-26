"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import Link from "next/link";

function CartSummery() {
    const cartItems = useCartStore((state) => state.cartItems);
    const total = cartItems.reduce((prevValue, item) => (+item.price * +item.quantity) + prevValue, 0)
    return (
        <div
            className={"col-span-2 rounded-lg bg-primary p-4 row-span-5 ring-2 ring-zinc-800 shadow-lg shadow-black flex flex-col gap-6 text-white"}>
            <h3 className={" font-semibold text-2xl"}>سبد خرید شما</h3>
            <hr className={" w-full"}/>
            <div className={"flex items-center justify-between"}>
                <h4>مجموع سبد خرید</h4>
                <p>{total} تومان</p>
            </div>
            <div className={"flex items-center justify-between"}>
                <h4>تعداد کالا</h4>
                <p>{cartItems.length}</p>
            </div>
            <div className={"flex flex-col gap-3"}>
                <h4>کد تخفیف</h4>
                <div className={"flex items-center gap-2"}>
                    <input
                        className={"bg-transparent outline-none flex-1 ring ring-darkerGold w-full px-4 py-2 text-darkerGold rounded-lg placeholder:text-darkerGold/60 "}
                        placeholder={"کد تخفیف خود را وارد کنید..."}/>
                    <Button
                        className={"px-6 py-2 rounded-lg shadow shadow-black bg-darkerGold ring ring-gold cursor-pointer text-sm "}
                        type={"button"}>ثبت کد تخفیف</Button>
                </div>
            </div>
            {cartItems.length > 0 &&<div className={"mt-auto w-full flex flex-col gap-2"}>
                <div className={"flex items-center justify-between text-lg px-3"}>
                    <h3>مبلغ نهایی سفارش</h3>
                    <p>{total}</p>
                </div>
                <Link href={"/checkout"}>
                    <Button type={"button"}
                            className={" w-full py-2 rounded-lg bg-darkChocolate shadow shadow-black cursor-pointer"}>
                        نهایی کردن سفارش
                    </Button>
                </Link>
            </div>}
        </div>
    );
}

export default CartSummery;