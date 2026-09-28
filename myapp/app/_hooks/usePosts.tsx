"use client"

import { useMutation } from "@tanstack/react-query";
import createPost from "../api/createPost";
import { useRouter } from "next/navigation";

export default function usePosts(){
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: ()=>{
            alert("Submitted");
            router.push("/success");
        }
    })

    return mutation;
}