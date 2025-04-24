"use client";
import React, {FormEvent} from 'react';
import RadioButton from "@/components/shop/base/RadioButton/radioButton";
import Counter from "@/components/shop/singleProducts/counter/counter";
import {useTranslations} from "next-intl";

function AddToCart() {
    const t= useTranslations("product-single")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {volume , quantity} = e.target as HTMLFormElement;
        console.log(volume.value , quantity.value);
    }
    return (
        <>
            <form className={"flex flex-col gap-8"} onSubmit={handleSubmit}>
                <div className={"flex flex-col gap-5"}>
                    <label htmlFor={"volume"} className={"text-darkerGold font-semibold text-xl"}>{t("volume")}</label>
                    <div className={"flex items-center w-fit gap-4"}>
                        <RadioButton value={"50"} name={"volume"}>50 {t("mil")}</RadioButton>
                        <RadioButton value={"100"} name={"volume"}>100 {t("mil")}</RadioButton>
                        <RadioButton value={"125"} name={"volume"}>125 {t("mil")}</RadioButton>
                    </div>
                    <label htmlFor={"quantity"}
                           className={"text-darkerGold font-semibold text-xl"}>{t("quantity")}</label>
                    <Counter initial={0}/>
                </div>
                <div className={"flex items-center gap-5 max-md:gap-3 max-lg:flex-col max-md:flex-row max-sm:flex-col"}>
                    <button className={"bg-darkChocolate text-white rounded-md px-10 py-3 cursor-pointer max-lg:text-nowrap max-md:px-4 max-md:py-2 max-sm:text-sm"} type={"submit"}>{t("addToCart")}
                    </button>
                    <button className={"bg-darkChocolate  text-white rounded-md px-10 py-3 cursor-pointer max-lg:text-nowrap max-md:px-4 max-md:py-2 max-sm:text-sm"} type={"button"}>{t("addToFavorite")}
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddToCart;