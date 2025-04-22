import React from 'react';
import bitter from "@/assets/images/category-men-bitter.png"
import sweet from "@/assets/images/category-men-sweet.png"
import cool from "@/assets/images/category-mens-cool.png"
import warm from "@/assets/images/category-mens-warm.png"
import Image from "next/image";
import Link from "next/link";

function Categories() {
    return (
        <section className={"w-full h-screen grid grid-cols-2 gap-10 p-15"} id={"category"}>
            <div
                className={"  flex items-center gap-4 bg-primary rounded-lg shadow-black shadow-2xl  ring-2 ring-zinc-900"}>
                <Image src={bitter.src} alt={"bitter"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن تلخ</h3>
                    <h4 className={"text-2xl font-semibold text-white"}>عطرهای تلخ؛ انتخابی خاص برای سلیقه‌های
                        متفاوت</h4>
                    <p className={"text-white"}>عطرهای تلخ با رایحه‌هایی از چرم، قهوه، نت‌های دودی یا چوب‌های تیره، حس
                        اقتدار، وقار و جذابیت را به همراه دارند. این عطرها معمولاً انتخاب افرادی با اعتماد به نفس بالا و
                        سبک شخصی خاص هستند و برای موقعیت‌های رسمی و خاص بسیار مناسب‌اند.</p>
                    <Link href={"/products?category=bitter"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 rounded-md self-end mt-5 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className={"  flex items-center gap-4  ring-2 ring-zinc-900 rounded-lg"}>
                <Image src={sweet.src} alt={"sweet"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن شیرین</h3>
                    <h4 className={"text-2xl font-semibold text-white"}> عطرهای شیرین؛ رایحه‌ای دل‌فریب و پر احساس</h4>
                    <p className={"text-white"}>
                        عطرهای شیرین با نت‌هایی مثل وانیل، کارامل، میوه‌های رسیده و گل‌های لطیف، حس زنانگی، لطافت و
                        انرژی مثبت را القا می‌کنند. این عطرها بسیار پرطرفدارند و انتخابی مناسب برای افرادی هستند که به
                        دنبال عطری رمانتیک و ماندگار هستند.</p>
                    <Link href={"/products?category=sweet"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 rounded-md self-end mt-5 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className={"  flex items-center gap-4 ring-2 ring-zinc-900 rounded-lg"}>
                <Image src={cool.src} alt={"cool"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold"}>ادکلن گرم</h3>
                    <h4 className={"text-2xl font-semibold text-white"}> عطرهای خنک؛ انتخابی تازه و باطراوت برای
                        روزهایعطرهای گرم؛ همراهی دلنشین برای روزهای سرد</h4>
                    <p className={"text-white"}>
                        عطرهای گرم با ترکیباتی از چوب، کهربا، ادویه و وانیل، حس صمیمیت و جذابیت را منتقل می‌کنند. این
                        عطرها گزینه‌ای فوق‌العاده برای پاییز و زمستان هستند و با ماندگاری بالا و رایحه‌ای عمیق، انتخابی
                        شیک و متفاوت برای شب‌ها و مهمانی‌ها به شمار می‌روند.</p>
                    <Link href={"/products??category=warn"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 rounded-md self-end mt-5 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </div>
            <div
                className={" flex items-center gap-4 bg-primary rounded-lg shadow-black shadow-2xl ring-2 ring-zinc-900"}>
                <Image src={warm.src} alt={"warm"} width={250} height={250}/>
                <div className={"flex flex-col justify-between py-2 px-5 gap-5 "}>
                    <h3 className={"text-4xl text-darkerGold font-bold "}>ادکلن خنک</h3>
                    <h4 className={"text-2xl font-semibold text-white"}> عطرهای خنک؛ انتخابی تازه و باطراوت برای روزهای
                        گرم</h4>
                    <p className={"text-white"}>
                        عطرهای خنک با رایحه‌های مرکباتی، آبی و گیاهی، حس طراوت و تازگی را به شما هدیه می‌دهند. این عطرها
                        با پخش بوی ملایم و دلنشین، بهترین گزینه برای فصل‌های بهار و تابستان هستند. اگر به دنبال عطری
                        سبک، پرانرژی و مناسب استفاده روزانه هستید، عطرهای خنک انتخابی هوشمندانه‌اند.
                    </p>
                    <Link href={"/products?category=cool"}>
                        <button
                            className={"text-white bg-darkerGold px-9 py-2 rounded-md self-end mt-5 cursor-pointer"}>
                            مشاهده همه
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
        ;
}

export default Categories;