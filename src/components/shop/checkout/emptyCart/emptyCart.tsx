import React from 'react';
import Button from "@/components/shop/base/button/button";
import Link from "next/link";
import {useTranslations} from "next-intl";

function EmptyCart() {
    const t = useTranslations("checkout")
    return (
        <div className={"flex items-center justify-center w-full h-screen flex-col gap-5"}>
            <p className={"text-white/70 text-center text-lg"}>{t("emptyCart")}</p>
            <Link href="/cart">
                <Button type={"button"} className={"bg-darkChocolate px-5 py-2 rounded-lg text-white cursor-pointer"}>{t("backToCart")}</Button>
            </Link>
        </div>
    );
}

export default EmptyCart;