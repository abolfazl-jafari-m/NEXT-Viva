"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {PhonePattern} from "@/constants/regex";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {redirect} from "next/navigation";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {priceFormatter} from "@/lib/utils/helpers";

interface inputs {
    name: string;
    lastName: string;
    phoneNumber: string;
    address: string;
}

function CheckoutForm() {
    const t= useTranslations("checkout");
    const cartItems = useCartStore((state) => state.cartItems);
    const discount = useCartStore((state) => state.discount);
    const totalPrice = cartItems.reduce((prev, item) => prev + (+item.price * +item.quantity), 0)
    const setOrder = useOrderStore((state) => state.setOrder);
    const {formState: {errors}, register, handleSubmit} = useForm<inputs>({
        defaultValues: {
            name: "",
            lastName: "",
            phoneNumber: "",
            address: ""
        }
    })

    const checkoutHandler: SubmitHandler<inputs> = (data) => {
        setOrder({
            customer_name: data.name + " " + data.lastName,
            customer_address: data.address,
            customer_phone: data.phoneNumber,
            items: cartItems.map(({title, quantity, volume, price}) => ({title, quantity, volume, price})),
            totalPrice: (totalPrice - totalPrice * (discount / 100)).toString(),
            status: "pending",
            deliver_time: null
        });
        redirect("/payment");

    }
    return (
        <div className={"w-full min-h-screen flex items-center justify-center flex-col gap-8 py-25"}>
            <h3 className={"text-2xl font-semibold text-white max-sm:text-xl"}>{t("interInfo")}</h3>
            <form className={"grid grid-cols-2 max-sm:grid-cols-1 gap-5 w-1/3 max-lg:w-2/3 max-sm:w-4/5"} onSubmit={handleSubmit(checkoutHandler)}>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"name"}>{t("name")} :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("name", {required: t("nameError")})}
                        placeholder={t("namePlaceholder")}/>
                    {errors.name && <span className="text-red-500 text-xs font-light">{errors.name.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"lastName"}>{t("lastName")} :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("lastName", {
                        required: t("lastNameError")
                    })}
                        placeholder={t("lastNamePlaceholder")}/>
                    {errors.lastName &&
                        <span className="text-red-500 text-xs  font-light">{errors.lastName.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"phoneNumber"}>{t("phone")} :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("phoneNumber", {
                        required: t("phoneError"),
                        pattern: {value: PhonePattern, message: t("phoneErrorRegex")}
                    })}
                        placeholder={t("phonePlaceholder")}/>
                    {errors.phoneNumber &&
                        <span className="text-red-500 text-xs font-light">{errors.phoneNumber.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80 col-span-full "}>
                    <label htmlFor={"address"}>{t("Address")} :</label>
                    <textarea rows={6}
                              className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("address", {required: t("addressError")})}
                              placeholder={t("addressPlaceholder")}></textarea>
                    {errors.address &&
                        <span className="text-red-500 text-xs font-light">{errors.address.message}</span>}
                </div>
                <div className={"col-span-full flex items-center gap-3 max-sm:flex-col-reverse max-sm:gap-5"}>
                    <Link href={"/cart"}>
                        <Button type={"button"}
                                className={"px-7 py-2 rounded-lg bg-secondary text-black cursor-pointer shadow shadow-black max-sm:text-sm max-sm:w-full"}>
                            {t("backToCart")}
                        </Button>
                    </Link>
                    <Button type={"submit"}
                            className={"px-7 py-2 rounded-lg bg-darkChocolate text-white cursor-pointer shadow shadow-black max-sm:text-sm max-sm:w-full"}>
                        {t("gotoPayment")}
                    </Button>
                </div>
            </form>
            <div className={"flex items-center justify-between text-white w-1/3  max-lg:w-2/3 max-sm:w-4/5"}>
                <h4>{t("payPrice")}</h4>
                <p>{priceFormatter(totalPrice - totalPrice * (discount / 100))} {t("currency")}</p>
            </div>
        </div>
    );
}

export default CheckoutForm;