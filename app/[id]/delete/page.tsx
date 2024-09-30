import { Button, buttonVariants } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

const DeletePage = async ({ params }: { params: { id: string } }) => {
  const todo = await prismadb.todos.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!todo) notFound();

  const handleDelete = async () => {
    "use server";

    try {
      await prismadb.todos.delete({
        where: {
          id: params.id,
        },
      });
    } catch (error) {
      console.log(`Delete Error:`, error);
      throw error;
    }

    revalidatePath("/");
    redirect("/");
  };

  return (
    <div className="container m-auto h-screen flex justify-center items-center">
      <div className="border rounded-md px-6 py-6">
        <h2 className="text-2xl font-semibold">Delete Todo?</h2>
        <p>This action can&apos;t be undone.</p>
        <form action={handleDelete}>
          <div className="flex gap-2 justify-end mt-5">
            <Link
              href="/"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              Cancel
            </Link>
            <Button type="submit" variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePage;
