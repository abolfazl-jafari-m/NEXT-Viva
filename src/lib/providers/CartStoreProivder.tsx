"use client";

import {type CartStore, createCartStore} from "@/store/cartStore";
import {createContext, ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand";

export type ContextApi = ReturnType<typeof createCartStore>;

export const CartContext = createContext<ContextApi | undefined>(undefined);


export interface CartStoreProvider {
    children: ReactNode;
}

export const CartStoreProvider = ({children}: CartStoreProvider) => {
    const storeRef = useRef<ContextApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createCartStore();
    }
    return(
        <CartContext.Provider value={storeRef.current}>
            {children}
        </CartContext.Provider>
    )
}
export const useCartStore = <T , > (selector : (store : CartStore)=> T,)=>{
    const cartStoreContext = useContext(CartContext);
    if (!cartStoreContext) {
        throw new Error(`useCounterStore must be used within CounterStoreProvider`)
    }
    return useStore(cartStoreContext, selector);
}