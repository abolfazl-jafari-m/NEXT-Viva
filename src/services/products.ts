import {axiosInstance as axios} from "@/lib/instance/axios";
import {Product} from "@/interfaces/interfaces";

export async function getProducts() {
    const response = await axios.get("/api/records/products");
    return response.data.records;
}

export async function getProductById(id: string) {
    try {
        const response = await axios.get(`/api/records/products/${id}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export async function getProductByFragrance(Fragrance: string) {

}

export async function addProduct(product: Omit<Product, "id" | "comments" | "createdAt">) {
    const response = await axios.post("/api/records/products", product);
    return response.data;
}

export async function updateProduct(id: string, product: Omit<Product, "id" | "comments" | "createdAt">) {
    const response = await axios.put(`/api/records/products/${id}`, product);
    return response.data;
}

export async function deleteProduct(id: string) {
    const response = await axios.delete(`/api/records/products/${id}`);
    return response.data;
}

export async function updateProductInventory(id: string, price ?: string, inventory ?: string) {
    const response = await axios.put(`/api/records/products/${id}`, {price, inventory});
    return response.data;
}