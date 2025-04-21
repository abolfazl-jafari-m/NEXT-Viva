import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useSwiper} from "swiper/react";

function SliderButtons() {
    const swiper = useSwiper();
    return (
        <div className={"absolute top-1/2 -translate-y-1/2 z-20 right-4 flex items-center gap-7 flex-col"}>
            <button className={"text-white/60 text-5xl cursor-pointer"} onClick={() => swiper.slideNext()}>
                <IoIosArrowForward/>
            </button>
            <button className={"text-white/60 text-5xl rotate-180 cursor-pointer"}
                    onClick={() => swiper.slidePrev()}>
                <IoIosArrowForward/>
            </button>
        </div>
    );
}

export default SliderButtons;