import React from 'react';
import bitter from "@/assets/images/category-men-bitter.png"
import sweet from "@/assets/images/category-men-sweet.png"
import cool from "@/assets/images/category-mens-cool.png"
import warm from "@/assets/images/category-mens-warm.png"
import Image from "next/image";

function Categories() {
    return (
        <section className={"w-full h-full grid grid-cols-2"} id={"category"}>
            <div
                className={"  flex items-center justify-between"}>
                <Image src={bitter.src} alt={"bitter"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-7 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن تلخ</h3>
                    <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <button className={"text-white bg-gold px-9 py-2 rounded-md self-end mt-5"}>
                        مشاهده همه
                    </button>
                </div>
            </div>
            <div
                className={"  flex items-center justify-between"}>
                <Image src={sweet.src} alt={"sweet"} width={250} height={250}/>\
                <div className={"flex flex-col justify-between py-2 px-7 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن شیرین</h3>
                    <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <button className={"text-white bg-gold px-9 py-2 rounded-md self-end mt-5"}>
                        مشاهده همه
                    </button>
                </div>
            </div>
            <div
                className={"  flex items-center justify-between"}>
                <Image src={cool.src} alt={"cool"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-7 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن گرم</h3>
                    <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <button className={"text-white bg-gold px-9 py-2 rounded-md self-end mt-5"}>
                        مشاهده همه
                    </button>
                </div>
            </div>
            <div
                className={"  flex items-center justify-between"}>
                <Image src={warm.src} alt={"warm"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-7 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن سرد</h3>
                    <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <button className={"text-white bg-gold px-9 py-2 rounded-md self-end mt-5"}>
                        مشاهده همه
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Categories;