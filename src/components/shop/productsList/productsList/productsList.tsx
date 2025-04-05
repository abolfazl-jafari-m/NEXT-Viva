"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import {MdDelete, MdEdit, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {LuArrowDownWideNarrow} from "react-icons/lu";
import {pagination} from "@/lib/utils/helpers";
import Button from "@/components/dash/base/button/button";

function ProductsList() {
    const products = [
        {
            "createdAt": "2025-04-05T06:16:31.517Z",
            "name": "Lydia Jacobi",
            "image": "https://picsum.photos/seed/stBV5dzp/2807/10",
            "price": "336.39",
            "category": "Invalid faker method - random.word",
            "count": 2,
            "id": "15"
        },
        {
            "createdAt": "2025-04-05T07:14:07.694Z",
            "name": "Joel Monahan",
            "image": "https://picsum.photos/seed/j8OStEA5II/2650/3378",
            "price": "537.79",
            "category": "Invalid faker method - random.word",
            "count": 33,
            "id": "30"
        },
        {
            "createdAt": "2025-04-05T00:22:00.206Z",
            "name": "Alison O'Keefe",
            "image": "https://loremflickr.com/1436/2490?lock=8587139102472945",
            "price": "562.75",
            "category": "Invalid faker method - random.word",
            "count": 23,
            "id": "31"
        },
        {
            "createdAt": "2025-04-05T08:24:23.692Z",
            "name": "Forrest O'Conner-Streich",
            "image": "https://picsum.photos/seed/LnwJcx/2786/2402",
            "price": "413.14",
            "category": "Invalid faker method - random.word",
            "count": 51,
            "id": "32"
        },
        {
            "createdAt": "2025-04-05T12:09:03.236Z",
            "name": "Miranda Paucek",
            "image": "https://loremflickr.com/2184/417?lock=3379922282097368",
            "price": "528.55",
            "category": "Invalid faker method - random.word",
            "count": 81,
            "id": "33"
        },
        {
            "createdAt": "2025-04-05T07:01:16.273Z",
            "name": "Marjorie Schuster",
            "image": "https://picsum.photos/seed/CzOdO/662/3407",
            "price": "844.20",
            "category": "Invalid faker method - random.word",
            "count": 35,
            "id": "34"
        },
        {
            "createdAt": "2025-04-04T17:32:26.691Z",
            "name": "Erica Ondricka DDS",
            "image": "https://picsum.photos/seed/lREqq2/1623/2898",
            "price": "936.99",
            "category": "Invalid faker method - random.word",
            "count": 66,
            "id": "35"
        }
    ]
    const [current, setCurrent] = useState<number>(0);
    const [itemPerPage, setItemPerPage] = useState<string>("5");

    const paginatedItems = useMemo(() => pagination(products, +itemPerPage, current), [current, itemPerPage])
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
            <div className={"overflow-x-auto w-full max-h-[400px] overflow-y-auto no-scrollbar"}>
                <table className={"border border-black border-collapse w-full "}>
                    <thead className={"bg-darkChocolate text-white sticky top-0 left-0 right-0 w-full"}>
                    <tr className={"text-xl  text-center w-full"}>
                        <th className={"p-1 "}>تصویر</th>
                        <th className={"p-1 "}>نام محصول</th>
                        <th className={"p-1 "}>قیمت</th>
                        <th className={"p-1 "}>دسته بندی</th>
                        <th className={"p-1 "}>فعالیت</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedItems.map(item => {
                        return (
                            <tr key={item.id}
                                className={"border border-black even:bg-secondary odd:bg-white text-center hover:bg-primary hover:text-white  transition-all duration-200"}>
                                <td className={"p-2"}>
                                    <img src={item.image} alt={item.name} className={"w-10 h-10 rounded-md"}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <div className={"flex items-center gap-2"}>
                                        <Button
                                            className={"bg-rose-800 p-2 rounded-md text-white text-sm hover:bg-rose-600"}
                                            type={"button"}>
                                            <MdDelete/>
                                        </Button>
                                        <Button
                                            className={"bg-yellow-700 rounded-md p-2 text-white text-sm hover:bg-yellow-500"}
                                            type={"button"}>
                                            <MdEdit/>
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

export default ProductsList;