import {Order} from "@/interfaces/interfaces";

export function pagination(array: any [], perPage: number, current: number) {
    const paginatedItems = [];
    for (let i = 0; i < array.length; i += perPage) {
        paginatedItems.push(array.slice(i, i + perPage))
    }
    return paginatedItems[current];
}

export function ordersFilter(orders: Order[], filter: string, sortBy: string) {
    let items = []
    items = orders.filter(item => {
        if (filter !== "All") {
            return item.status === filter
        }
        return item
    })
    if (sortBy !== "") {
        items.sort((a, b) => {
            return sortBy === "price" ? +b.totalPrice - +a.totalPrice : Date.parse(b.createdAt) - Date.parse(a.createdAt)
        })
    }
    return items
}

export const createUrlParams = (key: string, value ?: string | string[]) => {
    let valueParams = undefined;
    if (value) {
        if (Array.isArray(value)) {
            valueParams = value.map(item => `&filterValue=${item}`)
        } else {
            valueParams = `&filterValue=${value}`
        }
        return `&filterKey=${key}&${valueParams}`;
    }
    return ""
}