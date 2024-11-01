import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export default function Navbar() {
  return (
    <header className="p-5 bg-color-accent">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <Link href={"/"} className="text-2xl font-bold">
          My Anime List
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}
