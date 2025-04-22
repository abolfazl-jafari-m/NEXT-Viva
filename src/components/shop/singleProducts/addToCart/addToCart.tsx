"use client";
import React, {FormEvent} from 'react';
import RadioButton from "@/components/shop/base/RadioButton/radioButton";
import Counter from "@/components/shop/singleProducts/counter/counter";

function AddToCart() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {volume , quantity} = e.target as HTMLFormElement;
        console.log(volume.value , quantity.value);
    }
    return (
        <>
            <form className={"flex flex-col gap-8"} onSubmit={handleSubmit}>
                <div className={"flex flex-col gap-5"}>
                    <label htmlFor={"volume"} className={"text-darkerGold font-semibold text-xl"}>حجم</label>
                    <div className={"flex items-center w-fit gap-4"}>
                        <RadioButton value={"50"} name={"volume"}>50 میل</RadioButton>
                        <RadioButton value={"100"} name={"volume"}>100 میل</RadioButton>
                        <RadioButton value={"125"} name={"volume"}>125 میل</RadioButton>
                    </div>
                    <label htmlFor={"quantity"}
                           className={"text-darkerGold font-semibold text-xl"}>تعداد</label>
                    <Counter initial={0}/>
                </div>
                <div className={"flex items-center gap-5"}>
                    <button className={"bg-darkChocolate text-white rounded-md px-10 py-3 cursor-pointer"} type={"submit"}>اضافه کردن
                        به سبد
                        خرید
                    </button>
                    <button className={"bg-darkChocolate  text-white rounded-md px-10 py-3 cursor-pointer"} type={"button"}>افزودن به
                        علاقه
                        مندی ها
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddToCart;