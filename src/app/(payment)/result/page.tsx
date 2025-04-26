"use client";
import React from 'react';
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {FaCheck} from "react-icons/fa6";
import {IoMdClose} from "react-icons/io";
import Link from "next/link";

function Result() {
    const paymentResult = useOrderStore((state) => state.paymentStatus)
    return (
        <div className={"w-full h-screen bg-secondary flex items-center justify-center flex-col gap-5"}>

            {
                paymentResult ?
                    <>
                        <p className={"text-2xl font-bold"}>پرداخت موفق</p>
                        <div
                            className={"rounded-full p-4 bg-cyan-800 text-white text-7xl w-32 h-32 flex items-center justify-center"}>
                            <FaCheck/></div>
                    </>
                    : <>
                        <p className={"text-2xl font-bold"}>پرداخت ناموفق</p>
                        <div
                            className={"rounded-full p-4 bg-rose-800 text-white text-7xl w-32 h-32 flex items-center justify-center"}>
                            <IoMdClose/></div>
                    </>
            }
            <Link href={"/"}>
                <button className={"px-10 py-2 text-white bg-primary rounded-lg shadow shadow-black cursor-pointer"}>بازگشت به سایت
                    پذیرنده
                </button>
            </Link>
        </div>
    );
}

export default Result;