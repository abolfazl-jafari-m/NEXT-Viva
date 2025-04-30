import React from 'react';
import WishlistProducts from "@/components/shop/wishlist/wishlistProducts/wishlistProducts";
import {useTranslations} from "next-intl";

export const metadata = {
    title: "ویواعطر | لیست علاقه مندیها"
}

function WishList() {
    const  t = useTranslations("wishlist")
    return (
        <div className={"w-full min-h-screen p-30 flex flex-col gap-8 max-md:px-10 max-sm:px-4"}>
            <h2 className={"text-2xl font-bold text-white max-sm:text-lg light:text-black"}>{t("title")}</h2>
            <WishlistProducts/>
        </div>
    );
}

export default WishList;