"use client"

import { useState } from "react";
import { Post } from "../interfaces/post";
import usePosts from "../_hooks/usePosts";

export default function PostForm(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(0);

    const {mutate} = usePosts();


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const payload : Post = {
            title,
            body,
            userId
        }
        mutate(payload);
    }

    return (
        <form onSubmit={handleSubmit} >  
            <input type="text" placeholder="Enter Title: " onChange={(e)=>setTitle(e.target.value)} required /> <br/>
            <input type="text" placeholder="Enter Body: " onChange={(e)=>setBody(e.target.value)} required /> <br/>
            <input type="number" placeholder="Enter User ID: " onChange={(e)=>setUserId(+e.target.value)} required /> <br/>
            <input type="submit" className="bg-white text-black px-7" />
        </form>
    )
}