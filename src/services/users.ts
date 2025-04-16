import {axiosInstance as axios} from "@/lib/instance/axios";
import {SignInIterFace} from "@/interfaces/interfaces";
import toast from "react-hot-toast";


export async function login(email: string, password: string) {
    try {
        const response = await axios.post("/api/users/login", {email, password});
        return response.data;
    } catch (e: any) {
        if (e.status === 401) {
            toast.error("کاربر یافت نشد");
        } else {
            toast.error("مشکلی پیش امده لطفن بعدا تلاش کنید");
        }
    }
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