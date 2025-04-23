"use client";
import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import BestSellerSliderButtons
    from "@/components/shop/landing/specials/bestSellerSliderButtons/bestSellerSliderButtons";
import {useQuery} from "@tanstack/react-query";
import {getBestSellerProducts} from "@/services/products";
import {PuffLoader} from "react-spinners";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";
import {useTranslations} from "next-intl";

function BestSeller() {
    const t = useTranslations("bestSeller");
    const {isLoading, data: products} = useQuery<Product[]>({queryKey: ["bestSeller"], queryFn: getBestSellerProducts});
    return (
        <section className={"w-full h-screen flex items-center justify-center relative p-10"}>
            <h2 className={"text-center text-3xl font-bold text-darkerGold w-1/4"}>{t("title")}</h2>
            {
                isLoading ?
                    <div className={"flex items-center justify-center w-full h-full"}>
                        <PuffLoader color={"gold"} size={55}/>
                    </div> :
                    <Swiper
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        autoplay={{delay: 4000}}
                        navigation={true}
                        slidesPerView={1}
                        spaceBetween={50}
                    >
                        {
                            products?.map(product => (
                                <SwiperSlide key={product.id}>
                                    <div className={"grid grid-cols-2 justify-items-center  p-10 "}>
                                        <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`}
                                             alt={product.slug} width={350} height={350}/>
                                        <div className={"flex flex-col gap-8 "}>
                                            <h3 className={"text-4xl text-darkerGold font-bold font-fuzzy"}>{product.title}</h3>
                                            <p className={"text-white line-clamp-3 p-2 "}>{product.description}</p>
                                            <p className={"text-3xl font-bold text-darkerGold"}>{product.price} {t("currency")}</p>
                                            <Link href={`/products/${product.id}`}>
                                                <button
                                                    className={"py-3 px-8 rounded-md bg-gold text-white/80 shadow shadow-black self-start cursor-pointer"}>{t("buyNow")}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <BestSellerSliderButtons/>
                    </Swiper>
            }


        </section>
    );
}

export default BestSeller;