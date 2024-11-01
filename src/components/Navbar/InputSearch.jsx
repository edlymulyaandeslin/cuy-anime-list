"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value.trim();

    if (!keyword) return;

    router.push(`/search/${keyword}`);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full py-1 rounded pe-32 ps-4"
        placeholder="Search..."
        ref={searchRef}
      />
      <button className="absolute end-2 top-1">
        <IoSearch className="text-gray-400 size-6" />
      </button>
    </form>
  );
}
