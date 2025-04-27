"use client";
import React from 'react';
import Button from "@/components/shop/base/button/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {PhonePattern} from "@/constants/regex";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {redirect} from "next/navigation";

interface inputs {
    name: string;
    lastName: string;
    phoneNumber: string;
    address: string;
}

function CheckoutForm() {
    const cartItems = useCartStore((state) => state.cartItems);
    const discount = useCartStore((state) => state.discount);
    const totalPrice = cartItems.reduce((prev, item) => prev + (+item.price * +item.quantity), 0)
    const setOrder = useOrderStore((state) => state.setOrder);
    const {formState: {errors}, register, handleSubmit} = useForm<inputs>({
        defaultValues: {
            name: "",
            lastName: "",
            phoneNumber: "",
            address: ""
        }
    })

    const checkoutHandler: SubmitHandler<inputs> = (data) => {
        setOrder({
            customer_name: data.name + " " + data.lastName,
            customer_address: data.address,
            customer_phone: data.phoneNumber,
            items: cartItems.map(({title, quantity, volume, price}) => ({title, quantity, volume, price})),
            totalPrice: (totalPrice - totalPrice * (discount / 100)).toString(),
            status: "pending",
            deliver_time: null
        });
        redirect("/payment");

    }
    return (
        <div className={"w-full min-h-screen flex items-center justify-center flex-col gap-8 "}>
            <h3 className={"text-2xl font-semibold text-white"}>وارد کردن مشخصات</h3>
            <form className={"grid grid-cols-2 gap-5 w-1/3 "} onSubmit={handleSubmit(checkoutHandler)}>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"name"}>نام :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("name", {required: "فیلد نام الزامی است"})}
                        placeholder={"نام خود را وارد کنید"}/>
                    {errors.name && <span className="text-red-500 text-xs font-light">{errors.name.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"lastName"}>نام خانوادگی :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("lastName", {
                        required: "فیلد نام خانوادگی الزامی است"
                    })}
                        placeholder={"نام خانوادگی خود را وارد کنید"}/>
                    {errors.lastName &&
                        <span className="text-red-500 text-xs  font-light">{errors.lastName.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80"}>
                    <label htmlFor={"phoneNumber"}>تلفن همراه :</label>
                    <input
                        className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("phoneNumber", {
                        required: "فیلد شماره تلفن الزامی است",
                        pattern: {value: PhonePattern, message: "فرمت صحیح شماره تلفن وارد کنید"}
                    })}
                        placeholder={"تلفن همراه خود را وارد کنید"}/>
                    {errors.phoneNumber &&
                        <span className="text-red-500 text-xs font-light">{errors.phoneNumber.message}</span>}
                </div>
                <div className={"flex flex-col gap-3 text-white/80 col-span-full "}>
                    <label htmlFor={"address"}>آدرس :</label>
                    <textarea rows={6}
                              className={"rounded-lg ring ring-darkerGold px-3 py-2 outline-none placeholder:text-white/50 "} {...register("address", {required: "فیلد آدرس الزامی است"})}
                              placeholder={"آدرس  خود را وارد کنید"}></textarea>
                    {errors.address &&
                        <span className="text-red-500 text-xs font-light">{errors.address.message}</span>}
                </div>
                <div className={"col-span-full flex items-center gap-3"}>
                    <Button type={"button"}
                            className={"px-7 py-2 rounded-lg bg-secondary text-black cursor-pointer shadow shadow-black"}>
                        بازگشت به سبد خرید
                    </Button>
                    <Button type={"submit"}
                            className={"px-7 py-2 rounded-lg bg-darkChocolate text-white cursor-pointer shadow shadow-black"}>
                        تایید و رفتن به صفحه پرداخت
                    </Button>
                </div>
            </form>
            <div className={"flex items-center justify-between text-white w-1/3"}>
                <h4>مبلغ قابل پرداخت</h4>
                <p>{totalPrice - totalPrice * (discount / 100)} تومان</p>
            </div>
        </div>
    );
}

export default CheckoutForm;