"use client";
import React from 'react';
import {useWishlistStore} from "@/lib/providers/WishListStoreProvider";
import {getProductById} from "@/services/products";
import {PuffLoader} from "react-spinners";
import WishlistProductCard from "@/components/shop/wishlist/wishlistProductCard/wishlistProductCard";
import {useTranslations} from "next-intl";
import {useQueries} from "@tanstack/react-query";

function WishlistProducts() {
    const t = useTranslations("wishlist")
    const favorites = useWishlistStore(state => state.products);
    const data = useQueries({
        queries: favorites.map(item => {
            return {
                queryKey: ['favorite', item],
                queryFn: () => getProductById(item),
            }
        })
    })

    const isLoading = data.some(item => item.isLoading);

    if (isLoading) {
        return (
            <div className={"flex items-center justify-center w-full h-full mt-16"}>
                <PuffLoader color={"#C59E01"} size={50}/>
            </div>)
    }
    return (
        <div className={"flex flex-col gap-5 w-full h-full max-sm:items-center"}>
            {
                data.length > 0 ?
                    data.map((product) => <WishlistProductCard key={product.data.id} product={product.data}/>)
                    :
                    <div className={"flex items-center justify-center w-full h-full pt-10"}>
                        <p className={"text-white/70 font-semibold text-xl text-center max-sm:text-[16px] light:text-black"}>{t("noFav")}</p>
                    </div>
            }
        </div>
    );
}

export default WishlistProducts;