"use client"

import { useQuery } from "@tanstack/react-query"
import getTodos from "../api/getTodos";

export default function useTodos(){
    const query = useQuery({
        queryKey: ["todo"],
        queryFn: getTodos
    })

    return query;
}