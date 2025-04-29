import React from 'react';
import Link from "next/link";
import FadeIn from "@/components/animations/fadeIn/fadeIn";


function Genders() {
    return (
        <section className={"w-full min-h-screen grid grid-cols-3 justify-items-center gap-10 p-30 max-xl:p-20 max-lg:px-10  max-lg:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"}>
            <FadeIn
                className={"rounded-xl shadow shadow-black h-full w-full bg-[url('/images/man-perfume.jpg')] bg-cover bg-center bg-no-repeat   p-10 max-md:p-5 max-sm:p-2  flex bg-blend-darken bg-black/60 hover:bg-blend-normal group transition-all duration-300 "}>
                <Link href={"/products?gender=آقایان"} className={" text-white px-8 py-4  max-sm:px-4 max-sm:py-2 rounded-lg  flex flex-col gap-5  self-end group-hover:bg-black/70 group-hover:backdrop-blur-2xl transition-all duration-300 ease-in"}>
                    <h1 className={"text-3xl font-bold max-sm:text-2xl"}>ادکلن مردانه</h1>
                    <h4 className={"text-xl font-semibold max-sm:text-lg"}>رایحه‌ای برای قدرت و جسارت</h4>
                    <p className={"max-sm:text-sm"}>عطرهای مردانه ما، بازتابی از شکوه و اعتمادبه‌نفس‌اند؛ ترکیبی از نت‌های چوبی، ادویه‌ای و مشک‌دار که حضور شما را فراموش‌نشدنی می‌کند.</p>
                </Link>

            </FadeIn>
            <FadeIn
                className={"rounded-xl shadow shadow-black h-full w-full bg-[url('/images/woman-perfume.png')] bg-cover bg-center bg-no-repeat    p-10 max-md:p-5 max-sm:p-2  flex bg-blend-darken bg-black/60 hover:bg-blend-normal group transition-all duration-300 "}>
                <Link href={"/products?gender=خانم‌ها"} className={" text-white px-8 py-4  max-sm:px-4 max-sm:py-2 rounded-lg  flex flex-col gap-5  self-end group-hover:bg-black/70 group-hover:backdrop-blur-2xl transition-all duration-300 ease-in"}>
                    <h1 className={"text-3xl font-bold max-sm:text-2xl"}>عطر زنانه</h1>
                    <h4 className={"text-xl font-semibold max-sm:text-lg"}>رایحه‌ای برای لطافت و فریبندگی</h4>
                    <p className={"max-sm:text-sm"}>عطرهای زنانه ما، سرشار از شکوفه‌های بهاری، مرکبات تازه و رایحه‌های شیرین‌اند؛ خلق شده برای زنانی که می‌خواهند دنیایی را با عطر حضورشان تسخیر کنند.</p>
                </Link>
            </FadeIn>
            <FadeIn
                className={"rounded-xl shadow shadow-black h-full w-full bg-[url('/images/unisex-perfume.jpg')] bg-cover bg-center bg-no-repeat   p-10 max-md:p-5 max-sm:p-2  flex bg-blend-darken bg-black/60 hover:bg-blend-normal group transition-all duration-300  "}>
                <Link href={"/products?gender=یونسکس"} className={" text-white px-8 py-4  max-sm:px-4 max-sm:py-2 rounded-lg  flex flex-col gap-5  self-end group-hover:bg-black/70 group-hover:backdrop-blur-2xl transition-all duration-300 ease-in"}>
                    <h1 className={"text-3xl font-bold max-sm:text-2xl"}>عطر یونیسکس</h1>
                    <h4 className={"text-xl font-semibold max-sm:text-lg"}>رایحه‌ای فراتر از مرزها</h4>
                    <p className={"max-sm:text-sm"}>عطرهای یونیسکس ما، تلفیقی هنرمندانه از نت‌های خنک، مرکباتی و چوبی هستند؛ برای روح‌هایی که فراتر از تعریف‌های معمول، به دنبال بیان شخصیت یگانه خود می‌گردند.</p>
                </Link>
            </FadeIn>
        </section>
    );
}

export default Genders;