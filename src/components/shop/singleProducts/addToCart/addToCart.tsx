"use client";
import React, {FormEvent} from 'react';
import RadioButton from "@/components/shop/base/RadioButton/radioButton";
import Counter from "@/components/shop/singleProducts/counter/counter";
import {useTranslations} from "next-intl";
import toast from "react-hot-toast";
import {Product} from "@/interfaces/interfaces";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import Link from "next/link";

function AddToCart({product}: { product: Product }) {
    const t = useTranslations("product-single");
    const addToCart = useCartStore((state) => state.add);
    const cartItems = useCartStore((state) => state.cartItems);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {volume, quantity} = e.target as HTMLFormElement;
        if (!volume.value || quantity.value === "0") {
            toast(t("addToCart-message"), {
                "position": "top-right",
                style: {backgroundColor: "#fff", color: "#000", minWidth: "fit-content"}
            })
            return;
        }
        addToCart(product.id, product.title, volume.value, (+product.price - (+product.price * (+product.discount / 100))).toString(), quantity.value, product.images[0]);
        toast.success(t("addToCart-success"), {
            "position": "top-right",
            style: {backgroundColor: "#fff", color: "#000", minWidth: "fit-content"},
            icon :"✔"
        })

    }
    return (
        <>
            <form className={"flex flex-col gap-8"} onSubmit={handleSubmit}>
                <div className={"flex flex-col gap-5"}>
                    <label htmlFor={"volume"} className={"text-darkerGold font-semibold text-xl"}>{t("volume")}</label>
                    <div className={"flex items-center w-fit gap-4"}>
                        {
                            product.volume.map(item => <RadioButton key={item} value={item}
                                                                    name={"volume"}>{item} {t("mil")}</RadioButton>)
                        }
                    </div>
                    <label htmlFor={"quantity"}
                           className={"text-darkerGold font-semibold text-xl"}>{t("quantity")}</label>
                    <Counter productId={product.id}/>
                </div>
                <div className={"flex items-center gap-5 max-md:gap-3 max-lg:flex-col max-md:flex-row max-sm:flex-col"}>
                    {
                        cartItems.find(item => item.id === product.id) ? <Link href={"/cart"}>
                                <button
                                    className={"bg-darkChocolate text-white rounded-md px-10 py-3 cursor-pointer max-lg:text-nowrap max-md:px-4 max-md:py-2 max-sm:text-sm"}
                                    type={"submit"}>{t("seeCart")}
                                </button>
                            </Link>
                            :
                            <button
                                className={"bg-darkChocolate text-white rounded-md px-10 py-3 cursor-pointer max-lg:text-nowrap max-md:px-4 max-md:py-2 max-sm:text-sm"}
                                type={"submit"}>{t("addToCart")}
                            </button>
                    }

                    <button
                        className={"bg-darkChocolate  text-white rounded-md px-10 py-3 cursor-pointer max-lg:text-nowrap max-md:px-4 max-md:py-2 max-sm:text-sm"}
                        type={"button"}>{t("addToFavorite")}
                    </button>
                </div>
            </form>
        </>
    )
        ;
}

export default AddToCart;