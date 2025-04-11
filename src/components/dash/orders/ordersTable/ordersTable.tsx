"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import {pagination} from "@/lib/utils/helpers";
import Button from "@/components/dash/base/button/button";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlinePendingActions
} from "react-icons/md";
import {LuArrowDownWideNarrow} from "react-icons/lu";
import {FaFileCircleCheck} from "react-icons/fa6";
import Link from "next/link";
import {Order} from "@/interfaces/interfaces";
import {useTranslations} from "next-intl";

function OrdersTable({orders}: { orders: Order[] }) {
    const [current, setCurrent] = useState<number>(0);
    const [itemPerPage, setItemPerPage] = useState<string>("5");
    const t = useTranslations("dashOrders");

    const paginatedItems = useMemo(() => {
        if (orders.length > 0) {
            return pagination(orders, +itemPerPage, current)
        } else {
            return []
        }
    }, [current, itemPerPage, orders])

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }
    const next = () => {
        if (current < (orders.length / +itemPerPage) - 1) {
            setCurrent(current + 1);
        }
    }

    return (
        <>
            <div className={"overflow-x-auto w-full max-h-[500px]  max-xl:max-h-[400px] max-md:max-h-[330px]  overflow-y-auto no-scrollbar "}>
                <table className={"border border-black border-collapse w-full  bg-darkChocolate"}>
                    <thead className={"bg-darkChocolate text-white sticky top-0 left-0 right-0 w-full"}>
                    <tr className={"text-xl  text-center w-full max-md:text-lg max-sm:text-[15px]"}>
                        <th className={"p-1  text-nowrap"}>{t("name")}</th>
                        <th className={"p-1  text-nowrap"}>{t("price")}</th>
                        <th className={"p-1  text-nowrap"}>{t("order_time")}</th>
                        <th className={"p-1  text-nowrap"}>{t("status")}</th>
                        <th className={"p-1  text-nowrap"}>{t("actions")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedItems.map(item => {
                        return (
                            <tr key={item.id}
                                className={"border border-black even:bg-secondary odd:bg-white text-center hover:bg-primary hover:text-white  transition-all duration-200 max-md:text-sm"}>
                                <td className={"w-1/5 p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{item.customer_name}</td>
                                <td className={"w-1/5 p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{item.totalPrice}</td>
                                <td className={"w-1/5 p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{new Date(item.createdAt).toLocaleDateString("fa", {
                                    year: "2-digit",
                                    month: "long",
                                    day: "numeric"
                                })}</td>
                                <td className={"w-1/5 p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>
                                    <div className={"w-full flex justify-center h-full"}>
                                        {item.status === "delivered" ? <FaFileCircleCheck size={20}/> :
                                            <MdOutlinePendingActions size={22}/>}
                                    </div>
                                </td>
                                <td className={"mx-auto p-2 w-1/5max-sm:border max-sm:border-black/50 text-nowrap"}>
                                    <Link href={`/dashboard/orders/${item.id}`}>
                                        <Button
                                            className={"bg-sky-900 px-6 py-0.5 rounded-md text-white text-xs cursor-pointer text-nowrap"}
                                            type={"button"}>
                                            {t("check")}
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
            <div className={"flex items-center gap-6 max-md:justify-between"}>
                <div className={"flex items-center gap-4 text-lg"}>
                    <MdOutlineKeyboardArrowRight onClick={prev}/>
                    <MdOutlineKeyboardArrowLeft onClick={next}/>
                </div>
                <span className={"text-sm"}>
                  {t("sheet")} {current + 1} از {Math.ceil(orders.length / +itemPerPage)}
                </span>
                <div className={"w-32 border border-black rounded-md  relative"}>
                    <select className={" appearance-none w-full outline-none border-none px-1"}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setCurrent(0);
                                setItemPerPage(e.target.value)
                            }}
                            value={itemPerPage}>
                        <option value={"5"}>5</option>
                        <option value={"7"}>7</option>
                        <option value={orders.length}>{t("all")}</option>
                    </select>
                    <div className={"absolute top-1/2 -translate-y-1/2 left-1"}>
                        <LuArrowDownWideNarrow/>
                    </div>
                </div>
            </div>
        </>)
}

export default OrdersTable;