import React from 'react';
import {getCookie} from "cookies-next/server";
import { cookies } from 'next/headers';
import ConfirmCheckout from "@/components/shop/checkout/confirmCheckout/confirmCheckout";
import CheckoutForm from "@/components/shop/checkout/checkoutForm/checkoutForm";

 async function Checkout() {
    const accessToken =await getCookie("accessToken" ,{cookies});
    if (!accessToken) {
        return (
            <CheckoutForm />
        )
    }
    return (
          <ConfirmCheckout />
    );
}

export default Checkout;