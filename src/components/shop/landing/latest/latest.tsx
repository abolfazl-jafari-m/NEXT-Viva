import React from 'react';
import LatestProductCard from "@/components/shop/landing/latestProductCard/latestProductCard";
import {getLatestProducts} from "@/services/products";
import {Product} from "@/interfaces/interfaces";
import {getTranslations} from "next-intl/server";


async function Latest() {
    const t =await  getTranslations("latest");
    const data = await getLatestProducts(8);
    if (!data){
        throw new Error(`Latest product not found.`);
    }
    return (
        <section className={"w-full  flex items-center flex-col p-15 max-xl:p-5 max-sm:p-1 overflow-hidden"}>
            <h2 className={"text-4xl text-white font-bold max-md:mt-7 max-md:text-2xl light:text-black"}>{t("title")}</h2>
            <div className={"grid grid-cols-3 px-15 max-lg:grid-cols-2 max-xl:px-7 max-sm:p-3 max-sm:grid-cols-1 mt-16 max-sm:mt-5  gap-5 gap-y-10 max-lg:gap-y-5 w-full"}>
                {
                    data.records.map((product : Product) => (
                        <LatestProductCard key={product.id} product={product} />
                    ))
                }

            </div>

        </section>
    );
}

export default Latest;