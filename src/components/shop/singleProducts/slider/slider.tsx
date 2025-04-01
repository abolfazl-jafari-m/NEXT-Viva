import React from 'react';
import Image from "next/image";
import louisVuitton from "@/assets/images/louis-vuitton-imagination.webp";
import louisVuitton2 from "@/assets/images/LV-IMAGINATION.webp";
import image from "@/assets/images/category-original.png";

function Slider() {
    return (
        <div className={"flex gap-5 items-center"}>
            <div className={"flex flex-col gap-10 "}>
                <Image src={louisVuitton.src} alt={"louis vitton"} className={"rounded-xl"} width={400}
                       height={400}/>
                <div className={"flex items-center gap-5 justify-center"}>
                    <span className={"p-1 rounded-full w-2 h-2 bg-white"}></span>
                    <span className={"p-1 rounded-full w-2 h-2 bg-gold"}></span>
                    <span className={"p-1 rounded-full w-2 h-2 bg-white"}></span>
                </div>
            </div>
            <div className={"flex flex-col gap-3 "}>
                <Image src={louisVuitton.src} alt={"louis vitton"} className={"rounded-xl"} width={150}
                       height={150}/>
                <Image src={louisVuitton2.src} alt={"louis vitton"} className={"rounded-xl"} width={150}
                       height={150}/>
                <Image src={image.src} alt={"louis vitton"} className={"rounded-xl"} width={150} height={150}/>
            </div>
        </div>
    );
}

export default Slider;