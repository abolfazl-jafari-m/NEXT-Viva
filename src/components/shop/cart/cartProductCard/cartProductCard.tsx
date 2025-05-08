"use client";
import React from 'react';
import {CgClose} from "react-icons/cg";
import Button from "@/components/shop/base/button/button";
import {FaMinus, FaPlus} from "react-icons/fa6";
import {CartItem} from "@/interfaces/interfaces";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {priceFormatter} from "@/lib/utils/helpers";

function CartProductCard({cartItem}: { cartItem: CartItem }) {
    const t = useTranslations("cart");
    const remove = useCartStore((state) => state.remove);
    const dec = useCartStore((state) => state.dec);
    const inc = useCartStore((state) => state.inc);

    const increment = () => {
        if (+cartItem.quantity < +cartItem.inventory) {
            inc(cartItem.id);
        }
    }

    return (
        <div
            className={"bg-black light:bg-gray-800 ring-2 ring-zinc-800 rounded-lg shadow-lg shadow-black py-4 px-6 flex items-center justify-between max-lg:gap-5 max-sm:flex-col"}>
            <div className={"flex items-center gap-4 max-sm:w-full"}>
                <CgClose className={"text-2xl text-white cursor-pointer"} onClick={() => remove(cartItem.id)}/>
                <Link href={`/products/${cartItem.id}`}>
                    <div className={"flex gap-2"}>
                        <Image src={`http://api.alikooshesh.ir:3000${cartItem.image}`} alt={cartItem.title} width={50}
                               height={50}
                               className={"rounded-lg  w-14 max-sm:w-17"}/>
                        <div className={"flex flex-col gap-2 text-white"}>
                            <h4 className={"text-xl max-sm:text-[16px]"}>{cartItem.title}</h4>
                            <p>{cartItem.volume} {t("mil")}</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={"flex items-center gap-6 max-lg:flex-col-reverse max-lg:items-center max-sm:flex-row max-sm:justify-between max-sm:w-full"}>
                <div className={"flex items-center gap-2 min-w-26 max-sm:min-w-fit max-lg:justify-center "}>
                    <Button onClick={() => increment()}
                            className={"rounded-full bg-secondary p-1 ring ring-primary text-primary text-xs cursor-pointer"}
                            type={"button"}><FaPlus/></Button>
                    <p className={"text-white text-lg"}>{cartItem.quantity}</p>
                    <Button onClick={() => +cartItem.quantity > 1 ? dec(cartItem.id) : remove(cartItem.id)}
                            className={"rounded-full bg-secondary p-1 ring ring-primary text-primary text-xs cursor-pointer"}
                            type={"button"}><FaMinus/></Button>
                </div>
                <p className={"text-white min-w-26 max-sm:min-w-fit"}>{priceFormatter(+cartItem.price * +cartItem.quantity)} {t("currency")}</p>
            </div>

        </div>
    );
}

export default CartProductCard;