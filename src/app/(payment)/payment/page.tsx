"use client";
import React from 'react';
import dynamic from "next/dynamic";
const PaymentForm = dynamic(()=>import("@/components/payment/paymentForm/paymentForm"), {ssr: false});

function Payment() {

    return (
        <div
            className={"w-full h-screen bg-secondary flex items-center justify-center text-black"}>
            <PaymentForm />
        </div>
    );
}

export default Payment;