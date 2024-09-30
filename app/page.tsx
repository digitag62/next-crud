import { InputField } from "@/components/input-field";
import { TodoList } from "@/components/todo-list";
import { TodoSekeleton } from "@/components/todo-sekeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="container m-auto">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold">TestJer</h2>
        <InputField />

        <Suspense fallback={<TodoSekeleton />}>
          <TodoList />
        </Suspense>
      </div>
    </div>
  );
}
