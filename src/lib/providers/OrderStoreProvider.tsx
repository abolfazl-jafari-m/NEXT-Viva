"use client";
import {createContext, ReactNode, useContext, useRef} from "react";

import {createOrderStore, OrderStore} from "@/store/orderStore";
import {useStore} from "zustand";

export type ContextOrderType = ReturnType<typeof createOrderStore>
export const ContextOrder = createContext<ContextOrderType | undefined>(undefined );

export function OrderStoreProvider({ children }: { children: ReactNode }) {
    const   storeRef = useRef<ContextOrderType | null>(null);
    if (storeRef.current === null) {
        storeRef.current =createOrderStore();
    }

    return(
        <ContextOrder.Provider value={storeRef.current}>
            {children}
        </ContextOrder.Provider>
    )
}

export const useOrderStore = <T,>(selector : (store : OrderStore) => T) => {
    const context = useContext(ContextOrder);
    if (!context) {
        throw new Error("useOrderStore must be used within OrderStoreProvider");
    }
    return useStore(context , selector);
}