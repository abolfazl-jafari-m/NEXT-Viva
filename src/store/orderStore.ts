import {Order} from "@/interfaces/interfaces";
import {createStore} from "zustand/vanilla";


export type OrderState = {
    order: Omit<Order, "id" | "createdAt"> | null;
    paymentStatus: boolean | null;
}

export type OrderAction = {
    setOrder: (order: Omit<Order, "id" | "createdAt"> | null) => void;
    setPaymentStatus: (paymentStatus: boolean | null) => void;
}

export type OrderStore = OrderState & OrderAction;

const defaultState: OrderState = {
    order: null,
    paymentStatus: null
}

export const createOrderStore = (initState: OrderState = defaultState) => {
    return createStore<OrderStore>()((set) => ({
        ...initState,
        setOrder: (order: Omit<Order, "id" | "createdAt"> | null) => set({order}),
        setPaymentStatus: (paymentStatus: boolean | null) => set({paymentStatus}),
    }))
}