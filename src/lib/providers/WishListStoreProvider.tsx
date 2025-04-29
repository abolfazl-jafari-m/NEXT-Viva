"use client";
import {createWishlistStore, wishlistStore} from "@/store/wishListStore";
import {createContext, ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand";


export  type wishlistContext = ReturnType<typeof createWishlistStore>;

export const WishlistContext = createContext<wishlistContext | undefined>(undefined);


export function WishlistStoreProvider({children}: {children : ReactNode }) {
    const wishRef = useRef<wishlistContext | null>(null);
    if (wishRef.current === null) {
        wishRef.current = createWishlistStore();
    }
    return (
        <WishlistContext.Provider value={wishRef.current}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlistStore = <T,> (selector : (store : wishlistStore)=>T ,) :T=>{
        const context = useContext(WishlistContext);
        if (!context) {
            throw new Error("useWishlistStore must be used within the context Provider");
        }
        return useStore(context , selector);
}