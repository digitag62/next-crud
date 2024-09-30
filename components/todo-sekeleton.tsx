import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TodoSekeleton = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="w-1/2 py-2 px-3 border rounded-md flex justify-between items-center">
        <Skeleton className=" w-3/4 h-6 rounded-md" />

        <div className="flex gap-2">
          <Skeleton className=" w-10 h-10 rounded-md" />
          <Skeleton className=" w-10 h-10 rounded-md" />
        </div>
      </div>
      <div className="w-1/2 py-2 px-3 border rounded-md flex justify-between items-center">
        <Skeleton className=" w-3/4 h-6 rounded-md" />

        <div className="flex gap-2">
          <Skeleton className=" w-10 h-10 rounded-md" />
          <Skeleton className=" w-10 h-10 rounded-md" />
        </div>
      </div>
      <div className="w-1/2 py-2 px-3 border rounded-md flex justify-between items-center">
        <Skeleton className=" w-3/4 h-6 rounded-md" />

        <div className="flex gap-2">
          <Skeleton className=" w-10 h-10 rounded-md" />
          <Skeleton className=" w-10 h-10 rounded-md" />
        </div>
      </div>
    </div>
  );
};
