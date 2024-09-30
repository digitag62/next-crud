"use server";

import prismadb from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ValuesTodo = {
  todo: string;
};

export async function createTodo(values: ValuesTodo) {
  try {
    await prismadb.todos.create({
      data: {
        remarks: values.todo,
      },
    });
  } catch (error) {
    console.log(`Create Error:`, error);
    throw error;
  }

  revalidatePath("/");
}

export async function updateTodo(values: ValuesTodo, id: string) {
  try {
    await prismadb.todos.update({
      where: {
        id: id,
      },
      data: {
        remarks: values.todo,
      },
    });
  } catch (error) {
    console.log(`Error Update:`, error);
    throw error;
  }

  revalidatePath("/");
  redirect("/");
}
