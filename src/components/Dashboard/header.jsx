"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
export default function Header({ title }) {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="flex items-center justify-between mb-4">
      <button className="text-color-primary" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <h3 className="text-2xl text-color-primary">{title}</h3>
    </div>
  );
}
