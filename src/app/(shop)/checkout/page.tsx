import React from 'react';
import {getCookie} from "cookies-next/server";
import {cookies} from 'next/headers';
import CheckoutForm from "@/components/shop/checkout/checkoutForm/checkoutForm";
import {getUser} from "@/services/users";
import {UserInterface} from "@/interfaces/interfaces";
import {unauthorized} from "next/navigation";

export const metadata = {
    title: "نهایی کردن سفارش"
}

async function Checkout() {
    const accessToken = await getCookie("accessToken", {cookies});
    if (!accessToken) {
        unauthorized();
    }
    const user: UserInterface = await getUser(accessToken);
    return (
        <CheckoutForm user={user}/>
    );
}

export default Checkout;