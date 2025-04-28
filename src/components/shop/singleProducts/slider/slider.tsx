"use client"
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import Image from "next/image";


function Slider({images, slug}: { images: string[], slug: string }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="flex mt-10 w-full justify-center max-md:h-fit">
            <Swiper
                slidesPerView={1}
                modules={[Thumbs, Pagination, FreeMode]}
                thumbs={{swiper: thumbsSwiper}}
                pagination={{
                    clickable: true
                }}
                className={"w-3/4 h-fit"}
            >
                {images.map((item) => (
                    <SwiperSlide key={item} className={"w-full pagi"}>
                        <Image
                            src={`http://api.alikooshesh.ir:3000${item}`}
                            alt={slug}
                            className="rounded-xl mx-auto"
                            width={400}
                            height={400}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className=" w-1/4 h-[400px] max-md:h-50 max-md:h-36">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    watchSlidesProgress={true}
                    spaceBetween={2}
                    freeMode={true}
                    slidesPerView={2}
                    direction="vertical"
                    modules={[Thumbs, Pagination, FreeMode]}
                    className="h-full thumbs-swiper"
                >
                    {images.map((item) => (
                        <SwiperSlide key={`${item}-thumb`}>
                            <Image
                                src={`http://api.alikooshesh.ir:3000${item}`}
                                alt={slug}
                                className="rounded-lg"
                                width={150}
                                height={150}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

export default Slider;
