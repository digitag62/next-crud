"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { updateTodo } from "@/lib/actions";

const formSchema = z.object({
  todo: z.string().min(2, {
    message: "Todo must be at least 2 characters.",
  }),
});

type Todo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  remarks: string;
};

export const UpdateTodo = ({ todo, id }: { todo: Todo; id: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: todo.remarks,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    updateTodo(values, id);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Todo</FormLabel>
                <FormControl>
                  <Input placeholder="do a homework" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>
            Cancel
          </Link>
        </form>
      </Form>
    </div>
  );
};
