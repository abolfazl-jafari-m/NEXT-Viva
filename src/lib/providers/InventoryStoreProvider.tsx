'use client';
import React, {createContext, ReactNode, useContext, useRef} from 'react';
import {Action, createInventoryStore, State} from "@/store/invetoryStore";
import {useStore} from "zustand";

export type InventoryContextApi = ReturnType<typeof createInventoryStore>;

export const InventoryContext = createContext<InventoryContextApi | undefined>(undefined,);

function InventoryStoreProvider({children}: { children: ReactNode }) {
    const storeRef = useRef<InventoryContextApi | undefined>(undefined);
    if (storeRef.current === undefined) {
        storeRef.current = createInventoryStore();
    }
    return (
        <InventoryContext.Provider value={storeRef.current}>
            {children}
        </InventoryContext.Provider>
    );
}

export default InventoryStoreProvider;


export const useInventoryStore = <T, >(selector: (store: Action & State) => T,): T => {
    const inventoryStoreContext = useContext(InventoryContext);
    if (!inventoryStoreContext) {
        throw new Error("useInventoryStore Must in InventoryStoreProvider");
    }
    return useStore(inventoryStoreContext, selector)
}