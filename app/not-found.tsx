import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container m-auto h-screen flex flex-col justify-center items-center gap-2">
      <h2 className="text-2xl font-semibold">Oops, nothing here</h2>
      <p>Might you search something else, or you just tryin to be naughty.</p>
      <Link
        href={"/"}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Please, go back <ArrowRightIcon className="w-5 h-5 ml-3" />
      </Link>
    </div>
  );
};

export default NotFound;
