import {axiosInstance as axios} from "@/lib/instance/axios";
import {Product} from "@/interfaces/interfaces";
import {unstable_cache} from "next/cache";
import {createUrlParams} from "@/lib/utils/helpers";

export async function getProducts() {
    const response = await axios.get("/api/records/products?sortBy=createdAt&order=desc");
    return response.data.records;
}

export async function getProductById(id: string) {
    const response = await axios.get(`/api/records/products/${id}`);
    return response.data;
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

export const getLatestProducts = unstable_cache(async (limit) => {
    const response = await axios.get(`/api/records/products?limit=${limit}&sortBy=createdAt&order=desc`);
    return response.data;
}, ["latest"], {revalidate: 3600});

export const getSpecialProducts = async () => {
    const response = await axios.get("/api/records/products?filterKey=discount&filterValue=10&filterValue=13");
    return response.data.records;
}

export const getBestSellerProducts = async () => {
    const response = await axios.get("/api/records/products?limit=4&sortBy=price&order=desc");
    return response.data.records;
}

export async function getProductsByFilters(limit: number, page ?: string, fragrance ?: string[] | string, volume ?: string[] | string, gender ?: string[] | string) {
    const response = await axios.get(`/api/records/products?sortBy=createdAt&order=desc&limit=${limit}&page=${page}${createUrlParams("fragrance", fragrance)}${createUrlParams("volume", volume)}${createUrlParams("gender", gender)}`);
    return response.data;
}

