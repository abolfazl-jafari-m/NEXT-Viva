"use client";
import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import ProductsTable from "@/components/dash/products/productsTable/productsTable";
import Input from "@/components/dash/base/input/input";
import {FaSearch} from "react-icons/fa";
import Button from "@/components/dash/base/button/button";
import Link from "next/link";
import {getProducts} from "@/services/products";
import dynamic from "next/dynamic";
import {Product} from "@/interfaces/interfaces";

const TableLoader = dynamic(() => import("@/components/dash/base/tableLoader/tableLoader"), {ssr: false})

function Products() {
    const [search, setSearch] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.records)
        }).finally(() => setIsLoading(false));
    }, []);

    const filteredProducts = useMemo(() => {
        const items = products.filter(item => item.title.startsWith(search))
        if (items.length > 0) {
            return items;
        } else {
            return []
        }
    }, [search, products]);

    if (isLoading) return (<div className={"flex items-center justify-center flex-col gap-7 p-10"}>
        <TableLoader/>
    </div>)
    return (
        <div className={"flex flex-col gap-4 p-10"}>
            <div className={"flex items-center justify-between w-full"}>
                <div className={"flex items-center gap-4"}>
                    <h1 className={"font-bold text-4xl"}>محصولات</h1>
                    <Link href={"/dashboard/products/add"}>
                        <Button className={"bg-darkChocolate px-4 py-1 rounded-md text-white text-sm cursor-pointer"}
                                type={"button"}>
                            افزودن محصول
                        </Button>
                    </Link>
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