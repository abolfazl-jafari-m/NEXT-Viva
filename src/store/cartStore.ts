import {CartItem} from "@/interfaces/interfaces";
import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware";


export type State = {
    cartItems: CartItem[];
}

export type Actions = {
    add: (id :string ,title :string, volume :string , price :string, quantity :string , image :string) => void;
    remove: (id :string) => void;
    inc : (id :string) => void;
    dec : (id :string) => void;
}

export type CartStore = State & Actions;

const defaultState: State = {
    cartItems: [],
};

export const createCartStore = (initStore: State = defaultState) => {
    return createStore<CartStore>()(persist((set) => ({
        ...initStore,
        add: (id , title, volume , price, quantity , image) => set((state)=>({cartItems: [...state.cartItems , {id ,title ,image, volume, price, quantity}]})),
        remove: (id) =>set((state)=>({cartItems : state.cartItems.filter(item => item.id !== id)})) ,
        inc: (id) =>set((state)=>({cartItems: state.cartItems.map(item=>item.id !== id ? item : {...item, quantity :(+item.quantity+1).toString()})})) ,
        dec: (id) =>set((state)=>({cartItems: state.cartItems.map(item=>item.id !== id || item.quantity === "0" ? item : {...item, quantity :(+item.quantity-1).toString()})})) ,
    }), {name: "cart"}))
}