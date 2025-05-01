"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import OrdersTable from "@/components/dash/orders/ordersTable/ordersTable";
import {RxDropdownMenu} from "react-icons/rx";
import {FaSortNumericDown} from "react-icons/fa";
import {ordersFilter} from "@/lib/utils/helpers";
import SelectBox from "@/components/dash/base/SelectBox/SelectBox";
import {getOrders} from "@/services/orders";
import dynamic from "next/dynamic";
import {useQuery} from "@tanstack/react-query";
import {Order} from "@/interfaces/interfaces";
import {useTranslations} from "next-intl";

const TableLoader = dynamic(() => import("@/components/dash/base/tableLoader/tableLoader"), {ssr: false})

function Orders() {
    const {isLoading, data: orders} = useQuery<Order[]>({queryKey: ["orders"], queryFn: getOrders})
    const [filter, setFilter] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("");
    const t = useTranslations("dashOrders");

    const filteredOrders = useMemo(() => {
        if (orders) {
            return ordersFilter(orders, filter, sortBy)
        } else return []
    }, [filter, sortBy, orders]);

    if (isLoading) return (<TableLoader/>)
    return (
        <div className={"flex flex-col gap-3 p-10 max-md:p-5 text-black"}>
            <div>
                <h1 className={"text-3xl font-bold max-md:text-2xl "}>{t("title")}</h1>
            </div>
            <div className={"flex flex-col gap-4"}>
                <div className={" xl:mr-auto max-xl:justify-between max-md:items-end  flex items-center gap-15 max-lg:gap-10 max-md:gap-4 max-md:flex-col"}>
                    <SelectBox id={"sort"}
                               value={sortBy}
                               onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                               label={t("sortBy")} icon={<FaSortNumericDown/>}
                               options={
                                   [{value: "", label: "--"},
                                       {value: "price", label:t("byPrice")},
                                       {value: "date", label:t("byTime")}
                                   ]}/>
                    <SelectBox id={"filtering"}
                               value={filter}
                               onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
                               label={t("filter")} icon={<RxDropdownMenu/>}
                               options={
                                   [{value: "All", label:t("all")},
                                       {value: "pending", label: t("pending")},
                                       {value: "delivered", label: t("delivered")}
                                   ]}/>
                </div>
                <OrdersTable orders={filteredOrders}/>
            </div>

        </div>
    );
}

export default Orders;