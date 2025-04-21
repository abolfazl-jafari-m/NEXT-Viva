import React from 'react';
import ProductsList from "@/components/shop/productsList/productsList/productsList";
import FilterProducts from "@/components/shop/productsList/filterProducts/filterProducts";
import {HeroUIProvider} from "@heroui/react";

function Products() {
    return (
        <HeroUIProvider>
            <div className={"w-full min-h-dvh grid grid-cols-12 gap-14  p-35 "}>
                <div className={"col-span-full flex items-center justify-between px-5"}>
                    <h2 className={"text-3xl font-semibold text-white"}>لیست محصولات</h2>
                </div>
                <ProductsList/>
                <FilterProducts/>
            </div>
        </HeroUIProvider>
    );
}

export default Products;