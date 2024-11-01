"use client";

import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center max-w-xl min-h-screen gap-4 mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <IoSearch className="text-color-accent size-12" />
          <h1 className="text-2xl font-bold text-color-accent">404</h1>
        </div>
        |<h1 className="text-2xl font-bold text-color-accent">Not Found</h1>
      </div>
      <button
        onClick={() => router.back()}
        className="underline transition-all text-color-primary hover:text-color-accent"
      >
        Kembali
      </button>
    </div>
  );
}

export default NotFound;
