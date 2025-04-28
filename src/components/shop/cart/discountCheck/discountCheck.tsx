"use client";
import React, {useState} from 'react';
import Button from "@/components/shop/base/button/button";
import {discounts} from "@/constants/Discounts";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import toast from "react-hot-toast";
import {CgClose} from "react-icons/cg";
import {useTranslations} from "next-intl";

function DiscountCheck() {
    const t= useTranslations("cart");
    const discount = useCartStore(state => state.discount);
    const [value, setValue] = useState(() => discounts.find(item => item.discount === discount)?.value ?? "");
    const [checked, setChecked] = useState<boolean>(() => discount > 0);
    const setDiscount = useCartStore((state) => state.setDiscount);
    const handleDiscountCheck = () => {
        const item = discounts.find(item => item.value === value);
        if (item) {
            setDiscount(item.discount);
            setChecked(true);
            toast.success(t("discount-success"), {
                position: "top-right",
                style: {
                    backgroundColor: "white", color: "black"
                }
            })
        } else {
            toast.error(t("discount-error"), {
                position: "top-right",
                style: {
                    backgroundColor: "white", color: "black"
                }
            })
        }
    }
    return (
        <div className={"flex items-center gap-2 max-lg:flex-col max-lg:gap-4 max-md:flex-row"}>
            <input value={value} onChange={(e) => setValue(e.target.value)}
                   className={"bg-transparent outline-none flex-1 ring ring-darkerGold disabled:ring-green-600 disabled:text-green-600 w-full px-4 py-2 text-darkerGold rounded-lg placeholder:text-darkerGold/60 "}
                   placeholder={t("discountPlaceholder")} disabled={checked}/>
            {!checked ? <Button onClick={handleDiscountCheck}
                                className={"px-6 py-2 rounded-lg shadow shadow-black bg-darkerGold ring ring-gold cursor-pointer text-sm max-lg:w-full max-md:w-fit max-sm:px-3"}
                                type={"button"}>{t("discountBtn")}</Button>
                :
                <Button type={"button"} className={"p-3 rounded-md bg-rose-800 text-white cursor-pointer max-lg:w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:gap-3 max-lg:text-sm max-lg:p-2 max-md:w-fit max-md:p-3"}
                        onClick={() => {
                            setDiscount(0);
                            setChecked(false);
                            setValue("");
                            toast.success(t("discount-remove"), {
                                position: "top-right",
                                style: {
                                    backgroundColor: "white", color: "black"
                                }
                            })
                        }}>
                    <CgClose/>
                    <span className={"hidden max-lg:block max-md:hidden"}>{t("remove-discount")}</span>
                </Button>
            }
        </div>
    );
}

export default DiscountCheck;