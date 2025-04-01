import React from 'react';
import Image from "next/image";
import image from "@/assets/images/category-original.png"
import original from "@/assets/images/original.svg"
import bestPrice from "@/assets/images/number-one.svg"
import delivery from "@/assets/images/delivery.svg"
import louisVuitton from "@/assets/images/louis-vuitton-imagination.webp"
import louisVuitton2 from "@/assets/images/LV-IMAGINATION.webp"
import DebounceArrow from "@/components/shop/landing/DebounceArrow/DebounceArrow";
import {FaCircleUser} from "react-icons/fa6";

function SingleProducts() {
    return (
        <>
            <section className={"flex flex-col items-center justify-center w-full h-full"}>
                <div className={"grid grid-cols-2 w-4/5 items-center"}>
                    <div className={"flex flex-col gap-7 "}>
                        <h2 className={"font-semibold text-gold text-xl"}>لویی ویتون امجینیشن</h2>
                        <h4 className={"text-darkerGold text-5xl font-bold text-nowrap"}>حس خوب عطر لاکچری و دیگر
                            هیچ</h4>
                        <p className={"font-semibold text-white/80 "}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت
                            چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <button
                            className={"px-10 py-3 bg-gold rounded-md shadow shadow-black text-white/80 w-fit "}>اضافه
                            کردن به سبد خرید
                        </button>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Image src={image.src} alt={"image"} width={400} height={400}/>
                    </div>
                </div>
                <div className={"flex items-center justify-center gap-16 w-3/5 mt-8"}>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={original.src} alt={"original"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            تضمین اصالت
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={bestPrice.src} alt={"bestPrice"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            بهترین قیمت
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={delivery.src} alt={"delivery"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            ارسال رایگان
                        </p>
                    </div>

                </div>
                <DebounceArrow/>
            </section>
            <section className={"grid grid-cols-2 items-center w-full h-full"}>
                <div className={"flex items-center justify-center"}>
                    <Image src={louisVuitton.src} alt={"louis Vuitton"} width={400} height={400}
                           className={"rounded-2xl drop-shadow-lg"}/>
                </div>

                <div className={"grid grid-cols-3  gap-x-20 gap-y-10 w-fit"}>
                    <h2 className={"text-white font-bold text-3xl col-span-full"}>مشخصات</h2>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>نام عطر</p>
                        <p className={"text-darkerGold text-xl"}>دیور ساواج الیکسیر</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>برند</p>
                        <p className={"text-darkerGold text-xl"}>دیور</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>جنسیت</p>
                        <p className={"text-darkerGold text-xl"}>مردانه</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>غلطت</p>
                        <p className={"text-darkerGold text-xl"}>پرفیوم</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>حجم</p>
                        <p className={"text-darkerGold text-xl"}>100 میل</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>رایحه</p>
                        <p className={"text-darkerGold text-xl"}> تلخ, شیرین, گرم</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>موقعیت</p>
                        <p className={"text-darkerGold text-xl"}> آکادمیک, جلسات اداری, روزانه و کژوال, قرارهای دوستانه,
                            قرارهای عاشقانه, مهمانی رسمی</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>فصل</p>
                        <p className={"text-darkerGold text-xl"}>
                            بهار, پاییز, زمستان</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>سال عرضه</p>
                        <p className={"text-darkerGold text-xl"}>
                            2021</p>
                    </div>
                </div>
            </section>
            <section className={"h-full grid grid-cols-2 w-full px-32 py-10 justify-items-center"}>
                <div className={"flex flex-col gap-8"}>
                    <div className={"flex flex-col gap-3"}>
                        <h1 className={"text-5xl text-darkerGold"}>لویی ویتون امجینیشن</h1>
                        <p className={"text-darkerGold text-xl"}>لاکچری و خاص</p>
                    </div>
                    <p className={"text-gold text-3xl"}>130000000 تومن</p>
                    <p className={"text-white "}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        ساسا مورد استفاده قرار گیرد.
                    </p>
                    <form className={"flex flex-col gap-8"}>
                        <div className={"flex flex-col gap-5"}>
                            <label htmlFor={"volume"} className={"text-darkerGold font-semibold text-xl"}>حجم</label>
                            <div className={"flex items-center w-fit gap-4"}>
                                <div
                                    className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                                    <span className={"text-white font-light text-nowrap"}>50 میل</span>
                                    <input type={"radio"} name={"volume"} value={"50"}
                                           className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                                </div>
                                <div
                                    className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                                    <span className={"text-white font-light text-nowrap"}>100 میل</span>
                                    <input type={"radio"} name={"volume"} value={"100"}
                                           className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                                </div>
                                <div
                                    className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                                    <span className={"text-white font-light text-nowrap"}>200 میل</span>
                                    <input type={"radio"} name={"volume"} value={"200"}
                                           className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                                </div>
                            </div>
                            <label htmlFor={"quantity"}
                                   className={"text-darkerGold font-semibold text-xl"}>تعداد</label>
                            <div
                                className={"flex items-center gap-6 rounded-lg border border-darkChocolate px-3 py-2 bg-secondary w-fit"}>
                                <button className={"text-xl"}>+</button>
                                <span>3</span>
                                <button className={" text-xl"}>-</button>

                            </div>
                        </div>
                        <div className={"flex items-center gap-5"}>
                            <button className={"bg-darkChocolate text-white rounded-md px-10 py-3"}>اضافه کردن به سبد
                                خرید
                            </button>
                            <button className={"bg-darkChocolate  text-white rounded-md px-10 py-3"}>افزودن به علاقه
                                مندی ها
                            </button>
                        </div>
                    </form>
                </div>
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
            </section>
            <section className={"w-full min-h-full p-20"}>
                <h3 className={"text-white font-semibold text-5xl mb-10"}>نظرات</h3>
                <div className={"flex flex-col gap-10"}>
                    <form className={"flex flex-col gap-4"}>
                        <p className={"text-darkerGold text-xl"}>نظر خود را اضافه کنید</p>
                        <input type={"text"}
                               className={"text-white font-extralight shadow shadow-black outline-none rounded-md py-2 px-8 border border-white w-full placeholder:text-white/40"}
                               placeholder={"اینجا بنویسید"}/>
                        <button className={"bg-secondary self-end px-8 py-2 rounded-md shadow shadow-black"}>ثبت نظر
                        </button>
                    </form>
                    <div className={"flex flex-col gap-10 px-10"}>

                        <div className={"flex items-center gap-5"}>
                            <FaCircleUser size={40} color={"white"}/>
                            <div className={"flex flex-col gap-2"}>
                                <h4 className={"text-gold text-sm"}>محمد</h4>
                                <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است</p>
                            </div>
                        </div>
                        <div className={"flex items-center gap-5"}>
                            <FaCircleUser size={40} color={"white"}/>
                            <div className={"flex flex-col gap-2"}>
                                <h4 className={"text-gold text-sm"}>علیرضا</h4>
                                <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است</p>
                            </div>
                        </div>
                        <div className={"flex items-center gap-5"}>
                            <FaCircleUser size={40} color={"white"}/>
                            <div className={"flex flex-col gap-2"}>
                                <h4 className={"text-gold text-sm"}>ابوالفضل</h4>
                                <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است</p>
                            </div>
                        </div>
                        <div className={"flex items-center gap-5"}>
                            <FaCircleUser size={40} color={"white"}/>
                            <div className={"flex flex-col gap-2"}>
                                <h4 className={"text-gold text-sm"}>رضا</h4>
                                <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعتلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default SingleProducts;