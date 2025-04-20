"use client";
import React from 'react';
import Button from "@/components/dash/base/button/button";
import {Order, OrderItems} from "@/interfaces/interfaces";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateOrderStatus} from "@/services/orders";
import {BeatLoader} from "react-spinners";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {useTranslations} from "next-intl";

function OrderDetails({order}: { order: Order }) {
    const t = useTranslations("detailOrder")
    const queryClient = useQueryClient();
    const router = useRouter();
    const {isPending, mutate: updateOrder} = useMutation({
        mutationKey: ["updateOrders"],
        mutationFn: ({id, status}: { id: string, status: string }) => updateOrderStatus(id, status)
    });
    const handleStatusChange = (id: string) => {
        updateOrder({id, status: "delivered"}, {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['orders']}).then(() => {
                    toast.success(t("success-message"));
                })
            },
            onError: () => toast.error(t("error-message")),
            onSettled: () => router.back()
        })
    }
    return (
        <div className={"grid grid-cols-12 gap-10 max-xl:gap-5 grid-rows-2"}>
            <div
                className={"col-span-8 row-span-full max-lg:col-span-full  flex flex-col gap-4 text-white bg-primary rounded-lg shadow shadow-black p-5"}>
                <h3 className={"text-2xl font-bold mb-4 max-sm:text-xl"}>{t("title")}</h3>
                <table>
                    <thead>
                    <tr className={"bg-darkChocolate text-white font-bold text-lg max-sm:text-[14px]"}>
                        <th className={"p-2"}>{t("name")}</th>
                        <th>{t("price")}</th>
                        <th>{t("count")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        order.items.map((item: OrderItems) => (
                            <tr className={"odd:bg-secondary even:bg-white text-black text-center max-sm:text-sm"}
                                key={item.title}>
                                <td className={"p-2 min-w-fit"}>{item.title} - {item.volume} ml</td>
                                <td>{item.price}</td>
                                <td className={"w-1/3"}>{item.quantity}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div
                className={"col-span-4 max-lg:col-span-6 max-sm:col-span-full  flex flex-col gap-4 text-white bg-primary rounded-lg shadow shadow-black p-5 text-sm"}>
                <h3 className={"font-semibold text-2xl mb-3 max-sm:text-xl"}>{t("customer_detail")}</h3>
                <div className={"flex items-center gap-5 justify-between max-sm:gap-3"}>
                    <span className={"font-semibold"}>{t("customer_name")}</span>
                    <p>{order.customer_name}</p>
                </div>
                <div className={"flex items-center gap-5 justify-between max-sm:gap-3"}>
                    <span className={"font-semibold"}>{t("address")}</span>
                    <p className={"text-left"}>{order.customer_address}</p>
                </div>
                <div className={"flex items-center gap-5 justify-between max-sm:gap-3"}>
                    <span className={"font-semibold"}>{t("phone")}</span>
                    <p>{order.customer_phone}</p>
                </div>
            </div>
            <div
                className={"col-span-4 max-lg:col-span-6 max-sm:col-span-full flex flex-col gap-4 rounded-lg text-white bg-primary shadow shadow-black p-5 max-sm:text-sm"}>
                <h3 className={"font-semibold text-2xl mb-3 max-sm:text-xl"}>{t("order_status")}</h3>
                <div className={"flex items-center gap-5 justify-between"}>
                    <span className={"font-semibold"}>{t("order_status")}</span>
                    <p className={"text-nowrap"}>{order.status === "pending" ? t("pending"): t("delivered")}</p>
                </div>
                <div className={"flex items-center gap-5 justify-between"}>
                    <span className={"font-semibold"}>{t("time_order")}</span>
                    <p>{new Date(order.createdAt).toLocaleDateString("fa", {
                        year: "2-digit",
                        month: "long",
                        day: "numeric"
                    })}</p>
                </div>
                <div className={"flex items-center gap-5 justify-between"}>
                    <span className={"font-semibold"}>{t("time_delivered")}</span>
                    {order.status !== "pending" && <p>{new Date(order.deliver_time).toLocaleDateString("fa", {
                        year: "2-digit",
                        month: "long",
                        day: "numeric"
                    })}</p>}
                </div>
                {isPending ? <BeatLoader color={"purple"} className={"self-end"}/>
                    :
                    order.status === "pending" &&
                    <Button onClick={() => handleStatusChange(order.id)}
                            className={"px-8 py-2 rounded-md bg-darkChocolate text-white self-end cursor-pointer max-sm:text-sm"}
                            type={"button"}>{t("change_status")}</Button>}
            </div>
        </div>
    );
}

export default OrderDetails;