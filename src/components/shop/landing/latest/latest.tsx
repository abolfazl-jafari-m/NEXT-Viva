import React from 'react';
import LatestProductCard from "@/components/shop/landing/latestProductCard/latestProductCard";


function Latest() {
    return (
        <section className={"w-full  flex items-center flex-col p-15"}>
            <h2 className={"text-4xl text-white font-bold"}>آخرین محصولات</h2>
            <div className={"grid grid-cols-3 px-15  mt-16  gap-5 gap-y-10 w-full"}>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
               <LatestProductCard/>
            </div>

        </section>
    );
}

export default Latest;