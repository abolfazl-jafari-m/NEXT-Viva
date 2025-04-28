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
import Image from "next/image";

function BestSeller() {
    const t = useTranslations("bestSeller");
    const {isLoading, data: products} = useQuery<Product[]>({queryKey: ["bestSeller"], queryFn: getBestSellerProducts});
    return (
        <section className={"w-full h-screen flex items-center justify-center relative p-10 max-md:p-5  max-md:flex-col max-md:gap-5"}>
            <h2 className={"text-center text-3xl max-md:text-2xl font-bold text-darkerGold w-1/4 max-md:w-full text-nowrap max-lg:text-wrap"}>{t("title")}</h2>
            {
                isLoading ?
                    <div className={"flex items-center justify-center w-2/3  h-full"}>
                        <PuffLoader color={"gold"} size={55}/>
                    </div> :
                    <Swiper
                         className={"max-lg:w-full w-3/4"}
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
                                    <div className={"grid grid-cols-2 justify-items-center max-md:gap-5 p-10 max-lg:p-5 max-md:grid-cols-1 w-2/3 max-lg:w-full"}>
                                        <Image src={`http://api.alikooshesh.ir:3000${product.images[0]}`}
                                             alt={product.slug} width={350} height={350} className={"max-lg:w-[250px]"}/>
                                        <div className={"flex flex-col gap-8 max-lg:gap-5 max-md:gap-3 "}>
                                            <h3 className={"text-4xl text-darkerGold  max-md:text-2xl font-bold font-fuzzy"}>{product.title}</h3>
                                            <p className={"text-white line-clamp-3 max-lg:line-clamp-2 p-2 max-lg:p-0 "}>{product.description}</p>
                                            <p className={"text-3xl font-bold text-darkerGold"}>{product.price} {t("currency")}</p>
                                            <Link href={`/products/${product.id}`}>
                                                <button
                                                    className={"py-3 px-8 rounded-md bg-gold text-white/80 shadow shadow-black self-start cursor-pointer max-lg:px-4 max-lg:py-2 max-sm:text-sm"}>{t("buyNow")}
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