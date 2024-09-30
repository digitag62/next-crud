import { buttonVariants } from "@/components/ui/button";
import { UpdateTodo } from "@/components/update-field";
import prismadb from "@/lib/prismadb";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const UpdatePage = async ({ params }: { params: { id: string } }) => {
  const todo = await prismadb.todos.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!todo) notFound();

  return (
    <div className="container m-auto h-screen border flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-semibold">TestJer</h2>
      <h2 className="">Update Todo</h2>
      <UpdateTodo todo={todo} id={params.id} />
    </div>
  );
};

export default UpdatePage;
