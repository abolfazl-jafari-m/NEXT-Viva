"use client";
import React from 'react';
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {redirect} from "next/navigation";
import {addOrder} from "@/services/orders";
import {Order} from "@/interfaces/interfaces";
import toast from "react-hot-toast";

function Payment() {
    const order = useOrderStore((state) => state.order);
    const setPaymentStatus = useOrderStore((state) => state.setPaymentStatus);

    const paymentHandler = async (status: boolean) => {
        setPaymentStatus(status);
        if (status) {
            const result = await addOrder(order as Order);
            if (result) {
                toast.success("پرداخت شما موفق آمیز بود")
            }
        }
        redirect("/result");
    }
    return (
        <div className={"w-full h-screen bg-secondary flex items-center justify-center flex-col gap-8"}>
            <p>ایا از پرداخت {order?.totalPrice} اطمینان دارید ؟</p>
            <div className={"flex items-center justify-center gap-4"}>
                <button type={"button"} onClick={() => paymentHandler(true)}
                        className={"px-7 py-2 rounded-lg bg-cyan-800 text-white shadow shadow-black cursor-pointer"}>بله
                </button>
                <button type={"button"} onClick={() => paymentHandler(false)}
                        className={"px-7 py-2 rounded-lg bg-rose-800 text-white shadow shadow-black cursor-pointer"}>خیر
                </button>
            </div>

        </div>
    );
}

export default Payment;