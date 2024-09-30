import prismadb from "@/lib/prismadb";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { PencilIcon, Trash2Icon } from "lucide-react";

export const TodoList = async () => {
  const todos = await prismadb.todos.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className="border rounded-md w-1/2 py-2 px-3 flex justify-between items-center"
        >
          <p key={todo.id}>{todo.remarks}</p>
          <div className="flex gap-2">
            <Link
              href={`/${todo.id}/update`}
              className={buttonVariants({ size: "icon" })}
            >
              <PencilIcon className="w-4 h-4" />
            </Link>
            <Link
              href={`/${todo.id}/delete`}
              className={buttonVariants({ size: "icon" })}
            >
              <Trash2Icon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
