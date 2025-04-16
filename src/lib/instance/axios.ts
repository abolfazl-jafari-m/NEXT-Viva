import axios from "axios";
import {API_KEY, API_URL} from "@/constants/configs";

export const axiosInstance = axios.create({
    baseURL:API_URL,
    headers: {
        "api_key": API_KEY
    }
});