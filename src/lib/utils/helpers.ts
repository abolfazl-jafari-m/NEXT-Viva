export function pagination(array: any [], perPage: number, current: number) {
    const paginatedItems = [];
    for (let i = 0; i < array.length; i += perPage) {
        paginatedItems.push(array.slice(i, i + perPage))
    }
    return paginatedItems[current];
}