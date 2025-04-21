"use client";
import React from 'react';
import Image from "next/image";
import menperfume from "@/assets/images/category-mens.png";
import womenperfume from "@/assets/images/category-original.png";
import SocialLink from "@/components/shop/landing/socialLink/socialLink";
import DebounceArrow from "@/components/shop/landing/DebounceArrow/DebounceArrow";
import {Swiper, SwiperSlide} from "swiper/react";
import SliderButtons from "@/components/shop/landing/slider/sliderButtons/sliderButtons";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import {Autoplay, EffectFade, Navigation} from "swiper/modules";

function Slider() {
    return (
        <section className={"w-full h-screen  relative p-10 "}>
            <SocialLink/>
            <Swiper className={"w-full h-full flex items-center justify-center"}
                    slidesPerView={1}
                    modules={[Navigation , Autoplay, EffectFade ]}
                    navigation={true}
                    effect={"fade"}
                    fadeEffect={{crossFade : true}}
                    autoplay={{delay: 5000}}
                    spaceBetween={30}
                    loop={true}>
                <SwiperSlide>
                    <div className={"flex items-center gap-8 justify-center w-full h-full"}>
                        <div className={"text-white flex-col flex gap-8  w-1/3"}>
                            <h2 className={"font-semibold text-gold text-5xl"}>ژان پال گوتیه</h2>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده
                                از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی
                                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            <div className={"flex items-center gap-4 "}>
                        <span
                            className={"relative text-3xl text-gold font-bold after:content-['153000000'] after:absolute after:text-gold/50 after:decoration-2 after:decoration-red-500 after:right-3 after:top-7 after:text-xl after:line-through "}> 130000000 تومن</span>
                                <button
                                    className={"bg-darkerGold cursor-pointer text-white rounded-md shadow shadow-black drop-shadow-lg px-8 py-2"}>همین
                                    حالا خرید کنید
                                </button>
                            </div>
                        </div>
                        <Image src={menperfume.src} alt={"men PerFume"} width={450} height={450}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"flex items-center gap-8 justify-center w-full h-full"}>
                        <div className={"text-white flex-col flex gap-8  w-1/3"}>
                            <h2 className={"font-semibold text-gold text-5xl"}>لویی ویلتون امجینیشن</h2>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده
                                از طراحان گرافیک است  مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            <div className={"flex items-center gap-4 "}>
                        <span
                            className={"relative text-3xl text-gold font-bold after:content-['163000000'] after:absolute after:text-gold/50 after:decoration-2 after:decoration-red-500 after:right-3 after:top-7 after:text-xl after:line-through "}> 170000000 تومن</span>
                                <button
                                    className={"bg-darkerGold cursor-pointer text-white rounded-md shadow shadow-black drop-shadow-lg px-8 py-2"}>همین
                                    حالا خرید کنید
                                </button>
                            </div>
                        </div>
                        <Image src={womenperfume.src} alt={"men PerFume"} width={450} height={450}/>
                    </div>
                </SwiperSlide>
                <SliderButtons/>
            </Swiper>
            <a href={"#category"}>
                <DebounceArrow/>
            </a>
        </section>
    );
}

export default Slider;