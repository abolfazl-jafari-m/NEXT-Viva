"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import {pagination} from "@/lib/utils/helpers";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {LuArrowDownWideNarrow} from "react-icons/lu";
import TableCell from "@/components/dash/inventory/tableCell/tableCell";

function InventoryTable({inventoryList}: { inventoryList: any[] }) {
    const [current, setCurrent] = useState<number>(0);
    const [itemPerPage, setItemPerPage] = useState<string>("5");

    const paginatedItems = useMemo(() => {
        if (inventoryList.length > 0) {
            return pagination(inventoryList, +itemPerPage, current)
        } else {
            return []
        }
    }, [current, itemPerPage, inventoryList])

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }
    const next = () => {
        if (current < (inventoryList.length / +itemPerPage) - 1) {
            setCurrent(current + 1);
        }
    }

    return (
        <>
            <div className={"overflow-x-auto w-full max-h-[500px] overflow-y-auto no-scrollbar"}>
                <table className={"border border-black border-collapse w-full  bg-darkChocolate"}>
                    <thead className={"bg-darkChocolate text-white sticky top-0 left-0 right-0 w-full"}>
                    <tr className={"text-xl  text-center w-full"}>
                        <th className={"p-1 "}>نام محصول</th>
                        <th className={"p-1 "}>قیمت</th>
                        <th className={"p-1 "}>تعداد</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedItems.map(item => {
                        return (
                            <tr key={item.id}
                                className={"border border-black even:bg-secondary odd:bg-white text-center hover:bg-primary hover:text-white  transition-all duration-200"}>
                                <td className={"w-1/3 px-2 py-1"}> {item.name}</td>
                                <TableCell value={item.price} className={"w-1/3 px-2"}/>
                                <TableCell value={item.count} className={"w-1/3 px-2"}/>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
            <div className={"flex items-center gap-6"}>
                <div className={"flex items-center gap-4 text-lg"}>
                    <MdOutlineKeyboardArrowRight onClick={prev}/>
                    <MdOutlineKeyboardArrowLeft onClick={next}/>
                </div>
                <span className={"text-sm"}>
                  صفحه {current + 1} از {Math.ceil(inventoryList.length / +itemPerPage)}
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
                        <option value={inventoryList.length}>همه</option>
                    </select>
                    <div className={"absolute top-1/2 -translate-y-1/2 left-1"}>
                        <LuArrowDownWideNarrow/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InventoryTable;