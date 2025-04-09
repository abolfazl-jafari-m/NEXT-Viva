import {axiosInstance as axios} from "@/lib/instance/axios";


export async function uploadImage(formData: FormData) {
    const response = await axios.post("/api/files/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
        }
    });
    return response.data;
}