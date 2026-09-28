"use client"
import useTodos from "../_hooks/useTodos";
import { todoInterface } from "../interfaces/todo";
import ListElement from "./ListElement";

export default function TodoList() {
    const { data, isLoading } = useTodos();
    return (
            <div>

                {isLoading ? (<p>Loading...</p>) : (
                    <ul>
                        {data?.map((todo: todoInterface) => {
                            return <ListElement key={todo.id} todo={todo} />
                        })}
                    </ul>
                )}

            </div>
    )
}