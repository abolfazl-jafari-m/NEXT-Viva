import {axiosInstance as axios} from "@/lib/instance/axios";
import {API_KEY, API_URL} from "@/constants/configs";
import {Order} from "@/interfaces/interfaces";

export async function getOrders() {
    const response = await axios.get("/api/records/orders?sortBy=createdAt&order=desc")
    return response.data.records;
}

export async function addOrder (order :Omit<Order, "id"| "createdAt">){
    const response = await axios.post("/api/records/orders", order);
    return response.data;
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
        return response.json()
    } catch (e: any) {
        console.log(e.message);
    }
}


export async function updateOrderStatus(id: string, status: string) {
    const response = await axios.put(`/api/records/orders/${id}`, {status, deliver_time: new Date(Date.now())})
    return response.data;
}