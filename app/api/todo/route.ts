import prismadb from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const todos = await prismadb.todos.findMany();
//     return NextResponse.json({ data: todos }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const values = await req.json();

    const res = await prismadb.todos.create({
      data: {
        remarks: values.todo,
      },
    });

    if (res.id) {
      console.log(res.id);
      revalidatePath("/");
      return NextResponse.json({ data: res }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
