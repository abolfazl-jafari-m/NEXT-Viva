import axiosInstance from "@/lib/instance/axios";;

export async function getProducts() {
    const response = await axiosInstance.get("/api/records/products");
    return response.data;
}