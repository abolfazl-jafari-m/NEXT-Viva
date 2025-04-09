import axios from "axios";
import toast from "react-hot-toast";
import {API_KEY, API_URL} from "@/constants/configs";

export const axiosInstance = axios.create({
    baseURL:API_URL,
    headers: {
        "api_key": API_KEY
    }
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    toast.error(error.message, {
        position: "top-left"
    })
})
