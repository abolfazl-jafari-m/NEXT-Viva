"use client";
import React from 'react';
import {Product} from "@/interfaces/interfaces";
import Image from "next/image";
import {CgClose} from "react-icons/cg";
import {priceFormatter} from "@/lib/utils/helpers";
import Button from "@/components/shop/base/button/button";
import {useWishlistStore} from "@/lib/providers/WishListStoreProvider";
import Link from "next/link";
import {useTranslations} from "next-intl";

function WishlistProductCard({product}: { product: Product }) {
    const t = useTranslations("wishlist");
    const removeFromFavorite = useWishlistStore((state => state.remove))
    return (
        <div
            className={"rounded-lg shadow shadow-black ring-2 ring-zinc-600 bg-zinc-950 light:bg-secondary  flex  items-center justify-between gap-3 relative text-white light:text-black py-2 px-4 max-sm:justify-center max-sm:items-start max-sm:w-full max-sm:py-3 max-sm:relative"}>
            <div className={"flex items-center gap-5 max-sm:flex-col "}>
                <Image src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={product.slug} width={120}
                       height={120} className={"rounded-lg max-sm:w-20"}/>
                <div className={"flex flex-col gap-3 max-sm:items-center"}>
                    <h3 className={"text-xl font-semibold text-nowrap max-sm:text-lg"}>{product.title}</h3>
                    <p>{priceFormatter(+product.price - +product.price * +product.discount / 100)} {t("currency")}</p>
                    <Link href={`/products/${product.id}`}>
                        <Button type={"button"}
                                className={"px-6 py-1.5 rounded-lg bg-primary text-white shadow-lg shadow-black cursor-pointer max-sm:text-sm"}>{t("seeDetails")}
                        </Button>
                    </Link>
                </div>
            </div>
            <span className={"text-2xl font-bold cursor-pointer max-sm:absolute max-sm:top-4 max-sm:left-4"}
                  onClick={() => removeFromFavorite(product.id)}><CgClose/></span>
        </div>
    );
}

export default WishlistProductCard;