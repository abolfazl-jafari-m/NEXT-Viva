import {axiosInstance as axios} from "@/lib/instance/axios";
import {API_KEY, API_URL} from "@/constants/configs";

export async function getOrders() {
    const response = await axios("/api/records/orders")
    return response.data
}


export async function getOrderById(id: string) {
    try {
        const response = await fetch(`${API_URL}/api/records/orders/${id}`, {
            headers: {
                api_key: API_KEY
            }
        })
        if (!response.ok) {
            throw new Error("Some things goes wrong")
        }
        const result = response.json();
        return result
    } catch (e: any) {
        console.log(e.message);
    }
}