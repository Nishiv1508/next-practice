import Link from "next/link";
import TodoList from "./_components/TodoList";

export default async function Home() {

  return (
    <div>
      <h1 className="text-3xl font-bold">Following are the todos</h1>
      
      <button className="bg-white rounded-full px-2 text-black">
        <Link href="/posts">Posts</Link>
      </button>

      <TodoList />
    </div>
  );
}
