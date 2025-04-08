"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import {MdDelete, MdEdit, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {LuArrowDownWideNarrow} from "react-icons/lu";
import {pagination} from "@/lib/utils/helpers";
import Button from "@/components/dash/base/button/button";
import Link from "next/link";

function ProductTable({products}: { products: any[] }) {
    const [current, setCurrent] = useState<number>(0);
    const [itemPerPage, setItemPerPage] = useState<string>("5");

    const paginatedItems = useMemo(() => {
        if (products.length > 0) {
            return pagination(products, +itemPerPage, current)
        } else {
            return []
        }
    }, [current, itemPerPage, products])

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }
    const next = () => {
        if (current < (products.length / +itemPerPage) - 1) {
            setCurrent(current + 1);
        }
    }

    return (
        <>
            <div className={"overflow-x-auto w-full max-h-[500px] overflow-y-auto no-scrollbar"}>
                <table className={"border border-black border-collapse w-full  bg-darkChocolate"}>
                    <thead className={"bg-darkChocolate text-white sticky top-0 left-0 right-0 w-full"}>
                    <tr className={"text-xl  text-center w-full"}>
                        <th className={"p-1 "}>تصویر</th>
                        <th className={"p-1 "}>نام محصول</th>
                        <th className={"p-1 "}>قیمت</th>
                        <th className={"p-1 "}>برند</th>
                        <th className={"p-1 "}>فعالیت</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedItems.map(item => {
                        return (
                            <tr key={item.id}
                                className={"border border-black even:bg-secondary odd:bg-white text-center hover:bg-primary hover:text-white  transition-all duration-200"}>
                                <td className={"p-2"}>
                                    <img src={`http://api.alikooshesh.ir:3000${item.images[0]}`} alt={item.title}
                                         className={"w-10 h-10 rounded-md mx-auto"}/>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td className={"mx-auto"}>
                                    <div className={"flex items-center justify-center gap-2"}>
                                        <Link href={`/dashboard/products/edit/${item.id}`}>
                                            <Button
                                                className={"bg-yellow-700 rounded-md p-2 text-white text-sm hover:bg-yellow-500 cursor-pointer"}
                                                type={"button"}>
                                                <MdEdit/>
                                            </Button>
                                        </Link>
                                        <Button
                                            className={"bg-rose-800 p-2 rounded-md text-white text-sm hover:bg-rose-600 cursor-pointer"}
                                            type={"button"}>
                                            <MdDelete/>
                                        </Button>
                                    </div>
                                </td>
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
                  صفحه {current + 1} از {Math.ceil(products.length / +itemPerPage)}
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
                        <option value={products.length}>همه</option>
                    </select>
                    <div className={"absolute top-1/2 -translate-y-1/2 left-1"}>
                        <LuArrowDownWideNarrow/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductTable;