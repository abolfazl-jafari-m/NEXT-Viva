"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import OrdersTable from "@/components/dash/orders/ordersTable/ordersTable";
import {RxDropdownMenu} from "react-icons/rx";
import {FaSortNumericDown} from "react-icons/fa";
import {ordersFilter} from "@/lib/utils/helpers";

function Orders() {
    const orders = [
        {
            "createdAt": "2025-04-05T06:16:31.517Z",
            "name": "Lydia Jacobi",
            "totalPrice": "336.39",
            "status": "delivered",
            "id": "15"
        },
        {
            "createdAt": "2025-04-05T07:14:07.694Z",
            "name": "Joel Monahan",
            "image": "https://picsum.photos/seed/j8OStEA5II/2650/3378",
            "totalPrice": "537.79",
            "status": "pending",
            "id": "30"
        },
        {
            "createdAt": "2025-04-05T00:22:00.206Z",
            "name": "Alison O'Keefe",
            "image": "https://loremflickr.com/1436/2490?lock=8587139102472945",
            "totalPrice": "562.75",
            "status": "pending",
            "id": "31"
        },
        {
            "createdAt": "2025-04-05T08:24:23.692Z",
            "name": "Forrest O'Conner-Streich",
            "image": "https://picsum.photos/seed/LnwJcx/2786/2402",
            "totalPrice": "413.14",
            "status": "pending",
            "id": "32"
        },
        {
            "createdAt": "2025-04-05T12:09:03.236Z",
            "name": "Miranda Paucek",
            "image": "https://loremflickr.com/2184/417?lock=3379922282097368",
            "totalPrice": "528.55",
            "status": "delivered",
            "id": "33"
        },
        {
            "createdAt": "2025-04-05T07:01:16.273Z",
            "name": "Marjorie Schuster",
            "image": "https://picsum.photos/seed/CzOdO/662/3407",
            "totalPrice": "844.20",
            "status": "pending",
            "id": "34"
        },
        {
            "createdAt": "2025-04-04T17:32:26.691Z",
            "name": "Erica Ondricka DDS",
            "image": "https://picsum.photos/seed/lREqq2/1623/2898",
            "totalPrice": "936.99",
            "status": "pending",
            "id": "35"
        }
    ]
    const [filter, setFilter] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("");
    const filteredOrders = useMemo(() => ordersFilter(orders, filter, sortBy), [filter,, sortBy]);
    return (
        <div className={"flex flex-col gap-3 p-10"}>
            <div>
                <h1 className={"text-3xl font-bold"}>سفارشها</h1>
            </div>
            <div className={"flex flex-col gap-4"}>
                <div className={" mr-auto flex items-center gap-15"}>
                    <div className={"flex items-center gap-2"}>
                        <label htmlFor={"filtering"}>فیلتر سفارشها :</label>
                        <div className={"bg-secondary rounded-lg relative cursor-pointer px-8 py-1"}>
                            <select
                                id={"filtering"}
                                value={filter}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
                                className={"appearance-none w-full h-full outline-none border-none  text-sm  text-center bg-secondary pl-4 block"}>
                                <option value={"All"}>همه</option>
                                <option value={"pending"}>در حال انتظار</option>
                                <option value={"delivered"}>تحویل شده</option>
                            </select>
                            <div className={"absolute top-1/2 -translate-y-1/2 left-2  "}>
                                <RxDropdownMenu/>
                            </div>
                        </div>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <label htmlFor={"sort"}>مرتب سازی:</label>
                        <div className={"bg-secondary rounded-lg relative cursor-pointer px-6 py-1"}>
                            <select
                                id={"sort"}
                                value={sortBy}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                                className={"appearance-none w-full h-full outline-none border-none  text-sm  text-center bg-secondary pl-4 block"}>
                                <option value={""}>--</option>
                                <option value={"price"}> براساس قیمت</option>
                                <option value={"date"}>براساس تاریخ سفارش</option>
                            </select>
                            <div className={"absolute top-1/2 -translate-y-1/2 left-2  "}>
                                <FaSortNumericDown/>
                            </div>
                        </div>
                    </div>
                </div>
                <OrdersTable orders={filteredOrders}/>
            </div>

        </div>
    );
}

export default Orders;