"use client";
import React from 'react';
import Image from "next/image";
import special from "@/assets/images/category-original.png"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import BestSellerSliderButtons
    from "@/components/shop/landing/specials/bestSellerSliderButtons/bestSellerSliderButtons";

function BestSeller() {
    return (
        <section className={"w-full h-screen flex items-center justify-center relative p-10"}>
            <h2 className={"text-center text-3xl font-bold text-darkerGold w-1/4"}>پر فروش ترین محصولات</h2>
            <Swiper
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{delay: 4000}}
                navigation={true}
                parallax={{enabled : true}}
                slidesPerView={1}
                spaceBetween={50}
            >
                <SwiperSlide>
                    <div className={"grid grid-cols-2 justify-items-center  p-10 "}>
                        <Image src={special.src} alt={"specials"} width={450} height={450}/>
                        <div className={"flex flex-col gap-8 "}>
                            <h3 className={"text-4xl text-darkerGold font-bold"}>لاکچری با لویی ویتون</h3>
                            <p className={"text-white line-clamp-3 p-2 "}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت
                                چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <p className={"text-3xl font-bold text-darkerGold"}>13000000 تومن</p>
                            <button
                                className={"py-3 px-8 rounded-md bg-gold text-white/80 shadow shadow-black self-start"}>همین
                                حالا خرید کنید
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"grid grid-cols-2 justify-items-center  p-10"}>
                        <Image src={special.src} alt={"specials"} width={450} height={450}/>
                        <div className={"flex flex-col gap-8 "}>
                            <h3 className={"text-4xl text-darkerGold font-bold"}>لاکچری با لویی ویتون</h3>
                            <p className={"text-white line-clamp-3 p-2 "}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت
                                چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <p className={"text-3xl font-bold text-darkerGold"}>13000000 تومن</p>
                            <button
                                className={"py-3 px-8 rounded-md bg-gold text-white/80 shadow shadow-black self-start"}>همین
                                حالا خرید کنید
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <BestSellerSliderButtons/>
            </Swiper>


        </section>
    );
}

export default BestSeller;