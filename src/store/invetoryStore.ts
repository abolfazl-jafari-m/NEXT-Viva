import {createStore} from "zustand/vanilla";

type Product = {
    id: string,
    price?: string,
    inventory?: string
}
export type State = {
    productsInventory: Product[];
}

export type Action = {

    updatePrice: (id: string, price: string) => void;
    updateInventory: (id: string, inventory: string) => void;
}

export const createInventoryStore=  (products: Product[]  = []) => {
    return createStore<Action & State>()((set)=>({
        productsInventory: products,
        updatePrice: (id: string, price: string) =>
            set((state) => (
                state.productsInventory.find(item => item.id === id) ? {
                        productsInventory: state.productsInventory.map(item => {
                            if (item.id === id) {
                                return {...item , price};
                            } else {
                                return item;
                            }
                        })
                    }
                    : {productsInventory: [...state.productsInventory, {id, price}]}
            )),
        updateInventory: (id: string, inventory: string) =>
            set((state) => (
                state.productsInventory.find(item => item.id === id) ? {
                        productsInventory: state.productsInventory.map(item => {
                            if (item.id === id) {
                                return {...item , inventory};
                            } else {
                                return item;
                            }
                        })
                    }
                    : {productsInventory: [...state.productsInventory, {id, inventory}]}
            )),
    }))
}