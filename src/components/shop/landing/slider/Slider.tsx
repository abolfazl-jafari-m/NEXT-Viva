"use client";
import React from 'react';
import SocialLink from "@/components/shop/landing/socialLink/socialLink";
import DebounceArrow from "@/components/shop/landing/DebounceArrow/DebounceArrow";
import {Swiper, SwiperSlide} from "swiper/react";
import SliderButtons from "@/components/shop/landing/slider/sliderButtons/sliderButtons";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import {Autoplay, EffectFade, Navigation} from "swiper/modules";
import {Product} from "@/interfaces/interfaces";
import {useQuery} from "@tanstack/react-query";
import {getSpecialProducts} from "@/services/products";
import {PuffLoader} from "react-spinners";
import Link from "next/link";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {priceFormatter} from "@/lib/utils/helpers";

function Slider() {
    const t = useTranslations("slider-landing");
    const {isLoading, data: specialProducts} = useQuery<Product[]>({
        queryKey: ['specials'],
        queryFn: getSpecialProducts
    })
    return (
        <section className={"w-full h-screen  relative p-10 max-lg:p-5"}>
            <SocialLink/>
            {
                isLoading ?
                    <div className={"flex items-center justify-center w-full h-full"}>
                        <PuffLoader color={"#C59E01"} size={55}/>
                    </div> :
                    <Swiper className={"w-full h-full flex items-center justify-center"}
                            slidesPerView={1}
                            modules={[Navigation, Autoplay, EffectFade]}
                            navigation={true}
                            effect={"fade"}
                            fadeEffect={{crossFade: true}}
                            autoplay={{delay: 5000}}
                            spaceBetween={30}
                            loop={true}>
                        {
                            specialProducts?.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div
                                        className={"flex items-center gap-15 max-xl:gap-10 max-md:gap-5 justify-center max-sm:flex-col-reverse  w-full h-full"}>
                                        <div
                                            className={"text-white flex-col flex gap-8  w-1/3 max-sm:w-3/4 max-sm:gap-5 max-sm:text-center"}>
                                            <h2 dir={"ltr"}
                                                className={"font-semibold text-gold text-5xl font-fuzzy text-nowrap max-2xl:text-4xl max-lg:text-3xl max-xl:text-wrap light:text-darkerGold"}>{product.title}</h2>
                                            <p className={"text-white max-sm:hidden light:text-black"}>{product.description}</p>
                                            <div className={"flex items-center max-lg:flex-col gap-4 max-lg:gap-10 "}>
                                                <div
                                                    className={`relative text-4xl text-gold font-bold max-xl:text-2xl max-xl:text-nowrap max-sm:text-xl`}>
                                                    <span>{priceFormatter(+product.price - (+product.price * (+product.discount / 100)))} {t("currency")} </span>
                                                    <span
                                                        className={"absolute text-gold/50 decoration-2 decoration-red-500 right-3 top-7 text-2xl line-through"}>{priceFormatter(+product.price)}</span>
                                                </div>
                                                <Link href={`/products/${product.id}`}>
                                                    <button
                                                        className={"bg-darkerGold cursor-pointer text-white rounded-md shadow shadow-black drop-shadow-lg px-8 py-2 text-nowrap max-sm:text-sm"}>{t("buyNow")}
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <Image src={`https://viva-back-end.onrender.com${product.images[0]}`}
                                               alt={"men PerFume"}
                                               width={450} height={450}
                                               className={"max-lg:w-[350px] max-md:w-[280px] max-sm:w-[200px] "}/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <SliderButtons/>
                    </Swiper>
            }
            <DebounceArrow/>
        </section>
    );
}

export default Slider;