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

function Slider() {
    const {isLoading, data: specialProducts} = useQuery<Product[]>({
        queryKey: ['specials'],
        queryFn: getSpecialProducts
    })
    return (
        <section className={"w-full h-screen  relative p-10 "}>
            <SocialLink/>
            {
                isLoading ?
                    <div className={"flex items-center justify-center w-full h-full"}>
                        <PuffLoader color={"gold"} size={55}/>
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
                                    <div className={"flex items-center gap-8 justify-center w-full h-full"}>
                                        <div className={"text-white flex-col flex gap-8  w-1/3"}>
                                            <h2 className={"font-semibold text-gold text-5xl font-fuzzy text-nowrap"}>{product.title}</h2>
                                            <p className={"text-white"}>{product.description}</p>
                                            <div className={"flex items-center gap-4 "}>
                                                <div
                                                    className={`relative text-4xl text-gold font-bold `}>
                                                    <span>{+product.price - (+product.price * (+product.discount / 100))} تومن </span>
                                                    <span
                                                        className={"absolute text-gold/50 decoration-2 decoration-red-500 right-3 top-7 text-2xl line-through"}>{product.price}</span>
                                                </div>
                                                <Link href={`/products/${product.id}`}>
                                                    <button
                                                        className={"bg-darkerGold cursor-pointer text-white rounded-md shadow shadow-black drop-shadow-lg px-8 py-2"}>همین
                                                        حالا خرید کنید
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`}
                                             alt={"men PerFume"}
                                             width={450} height={450}/>
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