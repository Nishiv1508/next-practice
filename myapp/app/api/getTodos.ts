import api from "./axios";

export default async function getTodos(){
    const res = await api.get("/todos");
    return res.data;
}