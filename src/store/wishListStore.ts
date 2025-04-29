import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware";

export type state = {
    products: string[],
}

export type action = {
    add: (product: string) => void,
    remove: (product: string) => void,
}

export type wishlistStore = state & action;

const defaultState = {
    products: [],
}

export const createWishlistStore = (initState: state = defaultState) => (
    createStore<wishlistStore>()(persist((set) => ({
        ...initState,
        add: (product: string) => set((state) => ({products: state.products.find(item => item === product) ? [...state.products] : [...state.products, product]})),
        remove: (product: string) => set((state) => ({products: state.products.filter(item => item !== product)})),
    }), {name: "wishlist"}))
)