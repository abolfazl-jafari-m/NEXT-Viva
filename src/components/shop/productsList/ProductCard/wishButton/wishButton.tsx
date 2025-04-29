"use client";
import React, {useEffect} from 'react';
import Button from "@/components/shop/base/button/button";
import {FaHeart} from "react-icons/fa6";
import {useWishlistStore} from "@/lib/providers/WishListStoreProvider";

function WishButton({productId}: { productId: string }) {
    const {products: favorites, add, remove} = useWishlistStore(state => state);
    const item = !!favorites.find(item => item === productId);

    useEffect(() => {

    }, [favorites]);
    return (
        <>
            {
                item ?
                    <Button className={"bg-primary text-white p-2 rounded-lg shadow-lg shadow-black cursor-pointer"} type={"button"}
                            onClick={() => remove(productId)}>
                        <FaHeart color={"red"}/>
                    </Button>
                    :
                    <Button className={"bg-primary text-white p-2 rounded-lg shadow-lg shadow-black cursor-pointer "} type={"button"}
                            onClick={() => add(productId)}>
                        <FaHeart/>
                    </Button>
            }
        </>
    )
        ;
}

export default WishButton;