"use client"

import { todoInterface } from "../interfaces/todo"

export default function ListElement({todo}: {todo: todoInterface}){
    return <li>{todo.title}</li>
}