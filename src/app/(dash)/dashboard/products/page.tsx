"use client";
import React, {ChangeEvent, useMemo, useState} from 'react';
import ProductsTable from "@/components/dash/products/productsTable/productsTable";
import Input from "@/components/dash/base/input/input";
import {FaSearch} from "react-icons/fa";
import Button from "@/components/dash/base/button/button";

function Products() {
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
    const [search, setSearch] = useState<string>("");

    const filteredProducts = useMemo(() => {
        const items = products.filter(item => item.name.startsWith(search))
        if (items.length > 0) {
            return items;
        } else {
            return []
        }
    }, [search ]);
    return (
        <div className={"flex flex-col gap-4 p-10"}>
            <div className={"flex items-center justify-between w-full"}>
                <div className={"flex items-center gap-4"}>
                    <h1 className={"font-bold text-4xl"}>محصولات</h1>
                    <Button className={"bg-darkChocolate px-4 py-1 rounded-md text-white text-sm cursor-pointer"}
                            type={"button"}>
                        افزودن محصول
                    </Button>
                </div>
                <div
                    className={"flex items-center gap-2 border border-black bg-secondary  px-4 py-1 rounded-md"}>
                    <Input className={"flex-1 outline-none border-none bg-transparent"} name={"search"}
                           value={search}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                           placeholder={"جستجو کنید"}/>
                    <FaSearch/>
                </div>
            </div>
            <ProductsTable products={filteredProducts}/>
        </div>
    );
}

export default Products;