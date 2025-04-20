"use client";
import React, {ChangeEvent, useMemo, useState} from 'react';
import ProductsTable from "@/components/dash/products/productsTable/productsTable";
import Input from "@/components/dash/base/input/input";
import {FaSearch} from "react-icons/fa";
import Button from "@/components/dash/base/button/button";
import Link from "next/link";
import {getProducts} from "@/services/products";
import dynamic from "next/dynamic";
import {Product} from "@/interfaces/interfaces";
import {useQuery} from "@tanstack/react-query";
import {useTranslations} from "next-intl";

const TableLoader = dynamic(() => import("@/components/dash/base/tableLoader/tableLoader"), {ssr: false})


function Products() {
    const t = useTranslations("dashProducts")
    const [search, setSearch] = useState<string>("");
    const {isLoading, data: products, isError} = useQuery<Product[]>({queryKey: ["products"], queryFn: getProducts});
    const filteredProducts = useMemo(() => {
        const items = products?.filter(item => item.title.startsWith(search))
        if (items && items.length > 0) {
            return items;
        } else {
            return []
        }
    }, [search, products]);

    if (isError) {
        throw new Error(t("error-message"))
    }
    if (isLoading) return (<TableLoader/>)
    return (
        <div className={"flex flex-col gap-4 p-10 max-md:p-5"}>
            <div className={"flex items-center justify-between w-full max-sm:flex-col gap-5"}>
                <div className={"flex items-center gap-4 max-sm:justify-between max-md:w-full max-md:gap-2.5"}>
                    <h1 className={"font-bold text-4xl max-lg:text-2xl"}>{t("title")}</h1>
                    <Link href={"/dashboard/products/add"}>
                        <Button
                            className={"bg-darkChocolate px-4 py-1 rounded-md text-white text-sm cursor-pointer text-nowrap"}
                            type={"button"}>
                            {t("add")}
                        </Button>
                    </Link>
                </div>
                <div
                    className={"flex items-center gap-2 border border-black bg-secondary  px-4 py-1 rounded-md max-sm:w-full"}>
                    <Input className={"flex-1 outline-none border-none bg-transparent "} name={"search"}
                           value={search}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                           placeholder={t("search")}/>
                    <FaSearch/>
                </div>
            </div>
            <ProductsTable products={filteredProducts}/>
        </div>
    );
}

export default Products;