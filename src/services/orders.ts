import axiosInstance from "@/lib/instance/axios";

export async function getOrders() {
    const response = await axiosInstance("/api/records/orders", {
        headers: {
            api_key: "next-ecoomerce-ajm-L3dvJVrLEmQ9DzF8VM9JaC5dHbvu8ULKsZFo9Jab78uWxenM6PYJlwaW2G2QmvJKNqei37hNVsuxj7hcc56jzvAqL3vXuzFIxTj5GW0oKp8POWfPD"
        }
    })
    return response.data
}


export async function getOrderById(id: string) {
    try {
        const response = await fetch(`http://api.alikooshesh.ir:3000/api/records/orders/${id}`, {
            headers: {
                api_key: "next-ecoomerce-ajm-L3dvJVrLEmQ9DzF8VM9JaC5dHbvu8ULKsZFo9Jab78uWxenM6PYJlwaW2G2QmvJKNqei37hNVsuxj7hcc56jzvAqL3vXuzFIxTj5GW0oKp8POWfPD"
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