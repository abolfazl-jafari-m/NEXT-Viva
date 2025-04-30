"use client";
import React from 'react';
import dynamic from "next/dynamic";

const PaymentResult = dynamic(() => import("@/components/payment/paymentResult/paymentResult"), {ssr: false});

function Result() {
    return (
        <div className={"w-full h-screen bg-secondary flex items-center justify-center flex-col gap-5 text-black"}>
            <PaymentResult/>
        </div>
    );
}

export default Result;