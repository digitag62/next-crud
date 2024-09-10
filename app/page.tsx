import { InputField } from "@/components/input-field";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  const todos = await prismadb.todos.findMany();

  return (
    <div className="container m-auto border">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold">TestJer</h2>
        <InputField />
        {todos?.map((todo) => (
          <p key={todo.id}>{todo.remarks}</p>
        ))}
      </div>
    </div>
  );
}
