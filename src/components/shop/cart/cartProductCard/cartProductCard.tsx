"use client";
import React from 'react';
import {CgClose} from "react-icons/cg";
import Button from "@/components/shop/base/button/button";
import {FaMinus, FaPlus} from "react-icons/fa6";
import {CartItem} from "@/interfaces/interfaces";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import Link from "next/link";

function CartProductCard({cartItem}: { cartItem: CartItem }) {
    const remove = useCartStore((state) => state.remove);
    const dec = useCartStore((state) => state.dec);
    const inc = useCartStore((state) => state.inc);
    return (
        <div
            className={"bg-black ring-2 ring-zinc-800 rounded-lg shadow-lg shadow-black py-4 px-6 flex items-center justify-between"}>
            <div className={"flex items-center gap-4"}>
                <CgClose className={"text-2xl text-white cursor-pointer"} onClick={() => remove(cartItem.id)}/>
                <Link href={`/products/${cartItem.id}`}>
                    <div className={"flex gap-2"}>
                        <img src={`http://api.alikooshesh.ir:3000${cartItem.image}`} alt={"image"}
                             className={"rounded-lg  w-14"}/>
                        <div className={"flex flex-col gap-2 text-white"}>
                            <h4 className={"text-xl"}>{cartItem.title}</h4>
                            <p>{cartItem.volume} میل</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={"flex items-center gap-6"}>
                <div className={"flex items-center gap-2 min-w-26"}>
                    <Button onClick={() => inc(cartItem.id)}
                            className={"rounded-full bg-secondary p-1 ring ring-primary text-primary text-xs cursor-pointer"}
                            type={"button"}><FaPlus/></Button>
                    <p className={"text-white text-lg"}>{cartItem.quantity}</p>
                    <Button onClick={() => +cartItem.quantity > 1 ? dec(cartItem.id) : remove(cartItem.id)}
                            className={"rounded-full bg-secondary p-1 ring ring-primary text-primary text-xs cursor-pointer"}
                            type={"button"}><FaMinus/></Button>
                </div>
                <p className={"text-white min-w-26"}>{+cartItem.price * +cartItem.quantity} تومان</p>
            </div>

        </div>
    );
}

export default CartProductCard;