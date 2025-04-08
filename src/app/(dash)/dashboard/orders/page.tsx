"use client"
import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import OrdersTable from "@/components/dash/orders/ordersTable/ordersTable";
import {RxDropdownMenu} from "react-icons/rx";
import {FaSortNumericDown} from "react-icons/fa";
import {ordersFilter} from "@/lib/utils/helpers";
import SelectBox from "@/components/dash/base/SelectBox/SelectBox";
import {getOrders} from "@/services/orders";
import dynamic from "next/dynamic";
const TableLoader = dynamic(()=>import("@/components/dash/base/tableLoader/tableLoader") , {ssr : false})

function Orders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filter, setFilter] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("");
    const filteredOrders = useMemo(() => ordersFilter(orders, filter, sortBy), [filter, sortBy, orders]);


    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.records);
        }).finally(()=>setIsLoading(false));
    }, [orders]);

    if (isLoading) return (<div className={"flex items-center justify-center flex-col gap-7 p-10"}><TableLoader/></div>)
    return (
        <div className={"flex flex-col gap-3 p-10"}>
            <div>
                <h1 className={"text-3xl font-bold"}>سفارشها</h1>
            </div>
            <div className={"flex flex-col gap-4"}>
                <div className={" mr-auto flex items-center gap-15"}>
                    <SelectBox id={"sort"}
                               value={sortBy}
                               onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                               label={"مرتب سازی"} icon={<FaSortNumericDown/>}
                               options={
                                   [{value: "", label: "--"},
                                       {value: "price", label: "براساس قیمت"},
                                       {value: "date", label: "براساس تاریخ سفارش"}
                                   ]}/>
                    <SelectBox id={"filtering"}
                               value={filter}
                               onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
                               label={"فیلتر سفارشها"} icon={<RxDropdownMenu/>}
                               options={
                                   [{value: "All", label: "همه"},
                                       {value: "pending", label: "در حال انتظار"},
                                       {value: "delivered", label: "تحویل شده"}
                                   ]}/>
                </div>
                <OrdersTable orders={filteredOrders}/>
            </div>

        </div>
    );
}

export default Orders;