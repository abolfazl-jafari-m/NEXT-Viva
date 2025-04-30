import React from 'react';
import Link from "next/link";

function Forbidden() {
    return (
        <div className={"w-full h-screen bg-secondary flex items-center justify-center flex-col gap-5"}>
            <p className={"text-lg font-semibold"}>شما به این صفحه دسترسی ندارید</p>
            <Link href={"/"}>
                <button
                    className={"bg-rose-800 text-white rounded-lg px-6 py-2 shadow shadow-black cursor-pointer"}>بازگشت
                    به سایت پذیرنده
                </button>
            </Link>
        </div>
    );
}

export default Forbidden;