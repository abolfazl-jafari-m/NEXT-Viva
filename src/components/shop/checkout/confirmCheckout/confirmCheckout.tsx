"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {getCookie} from "cookies-next/client";
import {getUser} from "@/services/users";
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {UserInterface} from "@/interfaces/interfaces";
import {redirect} from "next/navigation";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {priceFormatter} from "@/lib/utils/helpers";

function ConfirmCheckout() {
    const t = useTranslations("checkout");
    const cartItems = useCartStore((state) => state.cartItems);
    const discount = useCartStore((state) => state.discount);
    const setOrder = useOrderStore((state) => state.setOrder);
    const totalPrice = cartItems.reduce((prev, item) => prev + (+item.price * +item.quantity), 0)
    const accessToken = getCookie("accessToken");


    const handlePayment = async () => {
        const user: UserInterface = await getUser(accessToken as string);
        setOrder({
            customer_name: user.name + " " + user.lastName,
            customer_address: user.address as string,
            customer_phone: user.phoneNumber as string,
            items: cartItems.map(({title, quantity, volume, price}) => ({title, quantity, volume, price})),
            totalPrice: (totalPrice - totalPrice * (discount / 100)).toString(),
            status: "pending",
            deliver_time: null
        });
        redirect("/payment");
    }
    return (
        <div className={"w-full min-h-screen flex items-center justify-center flex-col gap-5"}>
            <p className={"text-2xl text-white"}>{t("areYouSure")}</p>
            <div className={"flex items-center gap-10 text-white/80"}>
                <p>{t("payPrice")}</p>
                <p>{priceFormatter(totalPrice - (totalPrice * discount / 100))} {t("currency")}</p>
            </div>
            <div className={"flex items-center gap-5"}>
                <Link href={"/cart"}>
                    <Button type={"button"}
                            className={"py-2 px-6 bg-secondary  rounded-lg shadow shadow-black cursor-pointer "}>
                        {t("backToCart")}
                    </Button>
                </Link>
                <Button type={"button"} onClick={handlePayment}
                        className={"py-2 px-6 bg-darkChocolate text-white rounded-lg shadow shadow-black  cursor-pointer"}>
                    {t("gotoPayment")}
                </Button>
            </div>
        </div>
    );
}

export default ConfirmCheckout;