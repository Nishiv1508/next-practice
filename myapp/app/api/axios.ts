import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;