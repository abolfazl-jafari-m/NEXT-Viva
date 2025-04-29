"use client";
import React, {useEffect, useState} from 'react';
import {useWishlistStore} from "@/lib/providers/WishListStoreProvider";
import {Product} from "@/interfaces/interfaces";
import {getProductById} from "@/services/products";
import {PuffLoader} from "react-spinners";
import WishlistProductCard from "@/components/shop/wishlist/wishlistProductCard/wishlistProductCard";
import {useTranslations} from "next-intl";

function WishlistProducts() {
    const t = useTranslations("wishlist")
    const favorites = useWishlistStore(state => state.products);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (favorites.length > 0) {
            Promise.all(favorites.map(item => getProductById(item)))
                .then(res => setProducts(res))
                .catch(e => console.log(e))
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
            setProducts([]);
        }
    }, [favorites])

    if (isLoading) {
        return (
            <div className={"flex items-center justify-center w-full h-full mt-16"}>
                <PuffLoader color={"gold"} size={50}/>
            </div>)
    }
    return (
        <div className={"flex flex-col gap-5 w-full h-full max-sm:items-center"}>
            {
                products.length > 0 ?
                    products.map((product) => <WishlistProductCard key={product.id} product={product}/>)
                    :
                    <div className={"flex items-center justify-center w-full h-full pt-10"}>
                        <p className={"text-white/70 font-semibold text-xl text-center max-sm:text-[16px]"}>{t("noFav")}</p>
                    </div>
            }
        </div>
    );
}

export default WishlistProducts;