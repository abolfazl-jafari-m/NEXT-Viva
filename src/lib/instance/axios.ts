import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: "http://api.alikooshesh.ir:3000",
    headers: {
        "api_key": "next-ecoomerce-ajm-L3dvJVrLEmQ9DzF8VM9JaC5dHbvu8ULKsZFo9Jab78uWxenM6PYJlwaW2G2QmvJKNqei37hNVsuxj7hcc56jzvAqL3vXuzFIxTj5GW0oKp8POWfPD"
    }
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    toast.error(error.message, {
        position: "top-left"
    })
})

export default  axiosInstance