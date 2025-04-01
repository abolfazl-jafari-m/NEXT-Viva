import React from 'react';

function AddToCart() {
    return (
        <>
            <form className={"flex flex-col gap-8"}>
                <div className={"flex flex-col gap-5"}>
                    <label htmlFor={"volume"} className={"text-darkerGold font-semibold text-xl"}>حجم</label>
                    <div className={"flex items-center w-fit gap-4"}>
                        <div
                            className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                            <span className={"text-white font-light text-nowrap"}>50 میل</span>
                            <input type={"radio"} name={"volume"} value={"50"}
                                   className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                        </div>
                        <div
                            className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                            <span className={"text-white font-light text-nowrap"}>100 میل</span>
                            <input type={"radio"} name={"volume"} value={"100"}
                                   className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                        </div>
                        <div
                            className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
                            <span className={"text-white font-light text-nowrap"}>200 میل</span>
                            <input type={"radio"} name={"volume"} value={"200"}
                                   className={"appearance-none absolute w-full h-full top-0 left-0 z-10"}/>
                        </div>
                    </div>
                    <label htmlFor={"quantity"}
                           className={"text-darkerGold font-semibold text-xl"}>تعداد</label>
                    <div
                        className={"flex items-center gap-6 rounded-lg border border-darkChocolate px-3 py-2 bg-secondary w-fit"}>
                        <button className={"text-xl"}>+</button>
                        <span>3</span>
                        <button className={" text-xl"}>-</button>

                    </div>
                </div>
                <div className={"flex items-center gap-5"}>
                    <button className={"bg-darkChocolate text-white rounded-md px-10 py-3"}>اضافه کردن به سبد
                        خرید
                    </button>
                    <button className={"bg-darkChocolate  text-white rounded-md px-10 py-3"}>افزودن به علاقه
                        مندی ها
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddToCart;