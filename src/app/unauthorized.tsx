import React from 'react';
import Link from "next/link";
import image from "@/assets/images/unauthorized.png";
import Image from "next/image";
function Unauthorized() {
    return (
        <div className={"w-full h-screen bg-linear-120 from-primary from-20% to-80% via-50% via-black  to-zinc-800 flex items-center justify-center flex-col gap-5"}>
            <Image src={image.src} alt={"unauthorized"} width={500} height={500} className={"rounded-lg brightness-90"} />
            <p className={"text-lg font-semibold text-white"}>برای دسترسی باید وارد شوید</p>
            <div className={"flex items-center gap-5"}>
                <Link href={"/login"}>
                    <button
                        className={"bg-darkChocolate text-white rounded-lg px-6 py-2 shadow shadow-black cursor-pointer"}>صفحه
                        ورود
                    </button>
                </Link>
                <Link href={"/register"}>
                    <button
                        className={"bg-darkChocolate text-white rounded-lg px-6 py-2 shadow shadow-black cursor-pointer"}>صفحه
                        ثبت نام
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Unauthorized;