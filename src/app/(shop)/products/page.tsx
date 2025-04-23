import React from 'react';
import ProductsList from "@/components/shop/productsList/productsList/productsList";
import FilterProducts from "@/components/shop/productsList/filterProducts/filterProducts";
import {HeroUIProvider} from "@heroui/react";
import {getTranslations} from "next-intl/server";

export const metadata = {
    title: "ویوا عطر | لیست محصولات"
}

async function Products({searchParams,}: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const {volume, gender, fragrance, page} = await searchParams;
    const t = await getTranslations("products-page");
    return (
        <HeroUIProvider>
            <div className={"w-full min-h-dvh grid grid-cols-12 gap-14  p-35 "}>
                <div className={"col-span-full flex items-center justify-between px-5"}>
                    <h2 className={"text-3xl font-semibold text-white"}>{t("title")}</h2>
                </div>
                <ProductsList volume={volume} gender={gender} fragrance={fragrance} page={page}/>
                <FilterProducts/>
            </div>
        </HeroUIProvider>
    );
}

export default Products;