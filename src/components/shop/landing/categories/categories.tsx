import React from 'react';
import bitter from "@/assets/images/category-men-bitter.png"
import sweet from "@/assets/images/category-men-sweet.png"
import cool from "@/assets/images/category-mens-cool.png"
import warm from "@/assets/images/category-mens-warm.png"
import Image from "next/image";
import Link from "next/link";
import SlideIn from "@/components/animations/SlideIn/SlideIn";

function Categories() {
    return (
        <section
            className={"w-full min-h-screen grid grid-cols-2 max-lg:grid-cols-1 max-lg:p-10 max-lg:gap-5 gap-10 p-15 max-md:p-5 overflow-hidden"}
            id={"category"}>
            <SlideIn x={-300}
                className={"  flex items-center gap-4 max-md:gap-2 bg-primary rounded-lg shadow-black shadow-2xl max-xl:flex-col max-lg:flex-row ring-2 ring-zinc-900"}>
                <Image src={bitter.src} alt={"bitter"} width={250} height={250}
                       className={"max-xl:w-[200px] max-lg:w-[150px]"}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 max-md:gap-3 max-md:px-2 "}>
                    <h3 className={"text-4xl max-md:text-2xl text-darkerGold font-bold max-sm:text-xl"}>ادکلن تلخ</h3>
                    <h4 className={"text-2xl max-md:text-lg max-sm:text-sm font-semibold text-white"}>عطرهای تلخ؛
                        انتخابی خاص برای سلیقه‌های
                        متفاوت</h4>
                    <p className={"text-white max-sm:text-sm max-sm:line-clamp-2 max-md:line-clamp-4 max-sm:hidden"}>عطرهای
                        تلخ با رایحه‌هایی از چرم، قهوه، نت‌های دودی یا چوب‌های تیره، حس
                        اقتدار، وقار و جذابیت را به همراه دارند. این عطرها معمولاً انتخاب افرادی با اعتماد به نفس بالا و
                        سبک شخصی خاص هستند و برای موقعیت‌های رسمی و خاص بسیار مناسب‌اند.</p>
                    <Link href={"/products?fragrance=تلخ"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 max-md:text-sm max-md:px-5 max-md:py-1 rounded-md self-end mt-5 max-md:mt-0 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </SlideIn>

            <SlideIn x={-300}
                className={"  flex items-center gap-4 max-md:gap-2  ring-2 ring-zinc-900 rounded-lg max-xl:flex-col max-lg:flex-row "}>
                <Image src={sweet.src} alt={"sweet"} width={250} height={250}
                       className={"max-xl:w-[200px] max-lg:w-[150px]"}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 max-md:gap-3 max-md:px-2"}>
                    <h3 className={"text-4xl text-darkerGold font-bold max-sm:text-xl max-md:text-2xl"}>ادکلن شیرین</h3>
                    <h4 className={"text-2xl font-semibold text-white max-md:text-lg max-sm:text-sm light:text-black"}> عطرهای شیرین؛
                        رایحه‌ای دل‌فریب و پر احساس</h4>
                    <p className={"text-white max-sm:text-sm max-sm:line-clamp-2 max-md:line-clamp-4 max-sm:hidden light:text-black"}>
                        عطرهای شیرین با نت‌هایی مثل وانیل، کارامل، میوه‌های رسیده و گل‌های لطیف، حس زنانگی، لطافت و
                        انرژی مثبت را القا می‌کنند. این عطرها بسیار پرطرفدارند و انتخابی مناسب برای افرادی هستند که به
                        دنبال عطری رمانتیک و ماندگار هستند.</p>
                    <Link href={"/products?fragrance=شیرین"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 max-md:text-sm max-md:px-5 max-md:py-1 rounded-md self-end mt-5 max-md:mt-0 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </SlideIn>

            <SlideIn x={-300}
                className={"  flex items-center gap-4 max-md:gap-2 ring-2 ring-zinc-900 rounded-lg max-xl:flex-col max-lg:flex-row"}>
                <Image src={cool.src} alt={"cool"} width={250} height={250}
                       className={"max-xl:w-[200px] max-lg:w-[150px]"}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5  max-md:gap-3 max-md:px-2 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold max-sm:text-xl max-md:text-2xl"}>ادکلن گرم</h3>
                    <h4 className={"text-2xl font-semibold text-white light:text-black max-md:text-lg max-sm:text-sm"}> عطرهای خنک؛
                        انتخابی تازه و باطراوت برای
                        روزهایعطرهای گرم؛ همراهی دلنشین برای روزهای سرد</h4>
                    <p className={"text-white max-sm:text-sm max-sm:line-clamp-2 max-md:line-clamp-4 max-sm:hidden light:text-black"}>
                        عطرهای گرم با ترکیباتی از چوب، کهربا، ادویه و وانیل، حس صمیمیت و جذابیت را منتقل می‌کنند. این
                        عطرها گزینه‌ای فوق‌العاده برای پاییز و زمستان هستند و با ماندگاری بالا و رایحه‌ای عمیق، انتخابی
                        شیک و متفاوت برای شب‌ها و مهمانی‌ها به شمار می‌روند.</p>
                    <Link href={"/products??fragrance=گرم"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 max-md:text-sm max-md:px-5 max-md:py-1 rounded-md self-end mt-5 max-md:mt-0 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </SlideIn>
            <SlideIn x={-300}
                className={" flex items-center gap-4 max-md:gap-2 bg-primary rounded-lg shadow-black shadow-2xl ring-2 ring-zinc-900 max-xl:flex-col max-lg:flex-row"}>
                <Image src={warm.src} alt={"warm"} width={250} height={250}
                       className={"max-xl:w-[200px] max-lg:w-[150px]"}/>
                <div
                    className={"flex flex-col justify-between py-2 px-5 gap-5 max-md:text-2xl max-md:gap-3 max-md:px-2 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold max-sm:text-xl max-md:text-2xl "}>ادکلن خنک</h3>
                    <h4 className={"text-2xl font-semibold text-white  max-md:text-lg max-sm:text-sm"}> عطرهای خنک؛
                        انتخابی تازه و باطراوت برای روزهای
                        گرم</h4>
                    <p className={"text-white max-sm:text-sm max-sm:line-clamp-2 max-md:line-clamp-4 max-sm:hidden"}>
                        عطرهای خنک با رایحه‌های مرکباتی، آبی و گیاهی، حس طراوت و تازگی را به شما هدیه می‌دهند. این عطرها
                        با پخش بوی ملایم و دلنشین، بهترین گزینه برای فصل‌های بهار و تابستان هستند. اگر به دنبال عطری
                        سبک، پرانرژی و مناسب استفاده روزانه هستید، عطرهای خنک انتخابی هوشمندانه‌اند.
                    </p>
                    <Link href={"/products?fragrance=خنک"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 max-md:text-sm max-md:px-5 max-md:py-1 rounded-md self-end mt-5 max-md:mt-0 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </SlideIn>
        </section>
    )
        ;
}

export default Categories;