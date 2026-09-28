import { Post } from "../interfaces/post";
import api from "./axios";

export default async function createPost(payload: Post){
    const res = await api.post("/posts", payload);
    return res.data;
}