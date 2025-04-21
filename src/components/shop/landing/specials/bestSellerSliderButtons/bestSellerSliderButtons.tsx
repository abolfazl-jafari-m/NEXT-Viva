import React from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useSwiper} from "swiper/react";

function BestSellerSliderButtons() {
    const swiper= useSwiper();
    return (
        <div
            className={"absolute -translate-x-1/2 mt-5 left-1/2 bottom-20 z-30 text-white/70  flex items-center gap-4 self-end"}>
            <IoIosArrowUp className={"cursor-pointer rotate-90 rounded-full border border-secondary p-1"} size={42} onClick={()=>swiper.slideNext()}/>
            <IoIosArrowDown className={"cursor-pointer rotate-90 rounded-full border border-secondary p-1"}  size={42} onClick={()=>swiper.slidePrev()}/>
        </div>
    );
}

export default BestSellerSliderButtons;