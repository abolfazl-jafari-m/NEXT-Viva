import axiosInstance from "@/lib/instance/axios";

export async function getOrders() {
    const response = await axiosInstance("/api/records/orders", {
        headers: {
            api_key: "next-ecoomerce-ajm-L3dvJVrLEmQ9DzF8VM9JaC5dHbvu8ULKsZFo9Jab78uWxenM6PYJlwaW2G2QmvJKNqei37hNVsuxj7hcc56jzvAqL3vXuzFIxTj5GW0oKp8POWfPD"
        }
    })
    return response.data
}