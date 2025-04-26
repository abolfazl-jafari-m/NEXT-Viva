"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";

function ConfirmCheckout() {
    return (
        <div className={"w-full min-h-screen flex items-center justify-center flex-col gap-5"}>
            <p className={"text-2xl text-white"}>از خرید خود اطمینان دارید؟</p>
            <div className={"flex items-center gap-10 text-white/80"}>
                <p>مبلغ قابل پرداخت</p>
                <p>123430000 تومن</p>
            </div>
            <div className={"flex items-center gap-5"}>
                <Button type={"button"}
                        className={"py-2 px-6 bg-secondary  rounded-lg shadow shadow-black cursor-pointer "}>
                    بازگشت به صفحه خرید
                </Button>
                <Button type={"button"}
                        className={"py-2 px-6 bg-darkChocolate text-white rounded-lg shadow shadow-black  cursor-pointer"}>
                    رفتن به سبد پرداخت
                </Button>
            </div>
        </div>
    );
}

export default ConfirmCheckout;