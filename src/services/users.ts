import {axiosInstance as axios} from "@/lib/instance/axios";


export async function login(email: string, password: string) {
    const response = await axios.post("/api/users/login", {email, password});
    return response.data;
}

export async function getUser(accessToken: string) {
    const response = await axios.get("/api/users/me", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return response.data
}