import React from "react";
import Slider from "@/components/shop/landing/slider/Slider";
import Categories from "@/components/shop/landing/categories/categories";
import Latest from "@/components/shop/landing/latest/latest";
import BestSeller from "@/components/shop/landing/specials/bestSeller";
import Genders from "@/components/shop/landing/genders/genders";

export const dynamic ="force-dynamic";

export default  function Home() {
    return (
        <>
            <Slider />
            <Genders />
            <Latest/>
            <Categories/>
            <BestSeller/>
        </>


    );
}
