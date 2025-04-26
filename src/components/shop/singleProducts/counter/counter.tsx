"use client";
import React, {useState} from 'react';
import {useCartStore} from "@/lib/providers/CartStoreProivder";
import {MdDelete} from "react-icons/md";


function Counter({productId}: { productId: string }) {
    const remove = useCartStore((state) => state.remove);
    const dec = useCartStore((state) => state.dec);
    const inc = useCartStore((state) => state.inc);
    const cartItems = useCartStore((state) => state.cartItems);
    const item = cartItems.find(item => item.id === productId);
    const [counter, setCounter] = useState(() => item ? +item.quantity : 0);
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            if (item) dec(productId);
        }

    }
    const increment = () => {
        setCounter(counter + 1);
        if (item) inc(productId);
    }
    return (
        <div className={"flex items-center gap-3"}>
            <div
                className={"flex items-center gap-6 rounded-lg border border-darkChocolate px-3 py-2 bg-secondary w-fit max-sm:px-2 max-sm:py-1 max-md:gap-4"}>
                <button className={"text-xl cursor-pointer"} type={"button"} onClick={increment}>+
                </button>
                <span>{counter}</span>
                <input hidden value={counter} name={"quantity"} readOnly={true}/>
                <button className={" text-xl cursor-pointer"} type={"button"} onClick={decrement}>-
                </button>
            </div>
            { item?.quantity &&
                <MdDelete color={"white"} size={24} className={"cursor-pointer"} onClick={() => {
                    remove(productId);
                    setCounter(0);
                }}/>
            }
        </div>
    );
}

export default Counter;