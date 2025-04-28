"use client";
import React from 'react';
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {redirect} from "next/navigation";
import {addOrder} from "@/services/orders";
import {Order} from "@/interfaces/interfaces";
import toast from "react-hot-toast";
import Image from "next/image";
import card from "@/assets/images/credit-card.svg"
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {useTranslations} from "next-intl";

function Payment() {
    const t= useTranslations("payment");
    const order = useOrderStore((state) => state.order);
    const resetCart = useCartStore((state) => state.reset);
    const resetOrder = useOrderStore((state) => state.reset);
    const setPaymentStatus = useOrderStore((state) => state.setPaymentStatus);

    const paymentHandler = async (status: boolean) => {
        setPaymentStatus(status);
        if (status) {
            addOrder(order as Order).then(() => {
                toast.success(t("pay-success"));
                resetCart();
            }).catch(() => toast.error(t("pay-error")))
                .finally(() => {
                    resetOrder();
                    redirect("/result");
                });
        } else {
            redirect("/result");
        }
    }
    return (
        <div
            className={"w-full h-screen bg-secondary flex items-center justify-center"}>
            <div className={"w-2/4 grid grid-cols-2 place-content-center justify-items-center  justify-center gap-5"}>
                <Image src={card.src} alt={"cart"} width={400} height={200}/>
                <form className={"grid grid-cols-2 gap-8 h-fit"}>
                    <input className={"rounded-lg border border-primary px-4 py-2 col-span-full"}
                           placeholder={t("cartNumber")}/>
                    <input className={"rounded-lg border border-primary px-4 py-2 "} placeholder={"CVV"}/>
                    <input className={"rounded-lg border border-primary px-4 py-2 "} placeholder={t("expire")}/>
                    <input className={"rounded-lg border border-primary px-4 py-2 col-span-full "}
                           placeholder={t("pass")}/>
                    <button className={"py-2 rounded-lg bg-gray-600 text-white shadow shadow-black cursor-pointer"}
                            type={"button"}
                            onClick={() => paymentHandler(false)}>{t("cancel")}
                    </button>
                    <button className={"py-2 rounded-lg bg-cyan-800 text-white shadow shadow-black cursor-pointer"}
                            type={"button"}
                            onClick={() => paymentHandler(true)}>{t("pay")}
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Payment;