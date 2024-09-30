"use server";

import prismadb from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ValuesTodo = {
  todo: string;
};

export async function createTodo(values: ValuesTodo) {
  const res = await prismadb.todos.create({
    data: {
      remarks: values.todo,
    },
  });

  revalidatePath("/");
}

export async function updateTodo(values: ValuesTodo, id: string) {
  const res = await prismadb.todos.update({
    where: {
      id: id,
    },
    data: {
      remarks: values.todo,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteTodo(id: string) {
  const res = await prismadb.todos.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/");
  redirect("/");
}
