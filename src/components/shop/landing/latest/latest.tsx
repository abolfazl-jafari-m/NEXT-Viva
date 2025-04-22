import React from 'react';
import LatestProductCard from "@/components/shop/landing/latestProductCard/latestProductCard";
import {getLatestProducts} from "@/services/products";
import {Product} from "@/interfaces/interfaces";


async function Latest() {
    const data = await getLatestProducts(8);
    if (!data){
        throw new Error(`Latest product not found.`);
    }
    return (
        <section className={"w-full  flex items-center flex-col p-15"}>
            <h2 className={"text-4xl text-white font-bold"}>آخرین محصولات</h2>
            <div className={"grid grid-cols-3 px-15  mt-16  gap-5 gap-y-10 w-full"}>
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