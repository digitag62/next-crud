import { buttonVariants } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <p>Please wait a sec, loading...</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <MoveLeft className="w-5 h-5 mr-4" /> Go Back
      </Link>
    </div>
  );
};

export default Loading;
