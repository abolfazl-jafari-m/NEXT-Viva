import {axiosInstance as axios} from "@/lib/instance/axios";

export async function getProducts() {
    const response = await axios.get("/api/records/products");
    return response.data;
}