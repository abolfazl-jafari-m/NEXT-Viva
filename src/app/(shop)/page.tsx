import React from "react";
import Slider from "@/components/shop/landing/slider/Slider";
import Categories from "@/components/shop/landing/categories/categories";
import Latest from "@/components/shop/landing/latest/latest";
import BestSeller from "@/components/shop/landing/specials/bestSeller";
import Footer from "@/components/shop/shared/footer/footer";


export default function Home() {
    return (
        <>
            <Slider/>
            <Categories/>
            <Latest />
            <BestSeller />
            <Footer />
        </>


    );
}
