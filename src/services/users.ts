import {axiosInstance as axios} from "@/lib/instance/axios";
import {SignInIterFace} from "@/interfaces/interfaces";


export async function login(email: string, password: string) {
    const response = await axios.post("/api/users/login", {email, password});
    return response.data;
}

export async function getUser(accessToken: string) {
    try {
        const response = await axios.get("/api/users/me", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return response.data
    } catch (e) {
        console.log(e);
    }
}

export async function register(data: SignInIterFace) {
    try {
        const response = await axios.post("/api/users/register", data);
        return response.data
    } catch (e) {
        console.log(e);
    }
}