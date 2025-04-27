"use client";
import React, {useState} from 'react';
import Button from "@/components/shop/base/button/button";
import {discounts} from "@/constants/Discounts";
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import toast from "react-hot-toast";
import {CgClose} from "react-icons/cg";

function DiscountCheck() {
    const discount = useCartStore(state => state.discount);
    const [value, setValue] = useState(() => discounts.find(item => item.discount === discount)?.value ?? "");
    const [checked, setChecked] = useState<boolean>(() => discount > 0);
    const setDiscount = useCartStore((state) => state.setDiscount);
    const handleDiscountCheck = () => {
        const item = discounts.find(item => item.value === value);
        if (item) {
            setDiscount(item.discount);
            setChecked(true);
            toast.success("کد تخفیف شما با موفقیت اعمال شد", {
                position: "top-right",
                style: {
                    backgroundColor: "white", color: "black"
                }
            })
        } else {
            toast.error("کد تخفیف معتبر نمباشد", {
                position: "top-right",
                style: {
                    backgroundColor: "white", color: "black"
                }
            })
        }
    }
    return (
        <div className={"flex items-center gap-2"}>
            <input value={value} onChange={(e) => setValue(e.target.value)}
                   className={"bg-transparent outline-none flex-1 ring ring-darkerGold disabled:ring-green-600 disabled:text-green-600 w-full px-4 py-2 text-darkerGold rounded-lg placeholder:text-darkerGold/60 "}
                   placeholder={"کد تخفیف خود را وارد کنید..."} disabled={checked}/>
            {!checked ? <Button onClick={handleDiscountCheck}
                                className={"px-6 py-2 rounded-lg shadow shadow-black bg-darkerGold ring ring-gold cursor-pointer text-sm "}
                                type={"button"}>ثبت کد تخفیف</Button>
                :
                <Button type={"button"} className={"p-3 rounded-md bg-rose-800 text-white cursor-pointer"}
                        onClick={() => {
                            setDiscount(0);
                            setChecked(false);
                            setValue("");
                            toast.success("کد تخفیف با موفقیت حذف گردید", {
                                position: "top-right",
                                style: {
                                    backgroundColor: "white", color: "black"
                                }
                            })
                        }}>
                    <CgClose/>
                </Button>
            }
        </div>
    );
}

export default DiscountCheck;