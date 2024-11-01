import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

async function Page() {
  const user = await authUserSession();
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-8 text-color-primary">
      <h2 className="text-2xl font-bold">Welcome, {user?.name} </h2>
      <Image src={user?.image} width={250} height={250} alt="avatar" />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="px-4 py-2 text-xl font-semibold rounded-sm bg-color-accent text-color-dark"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comments"
          className="px-4 py-2 text-xl font-semibold rounded-sm bg-color-accent text-color-dark"
        >
          My Comments
        </Link>
      </div>
    </div>
  );
}

export default Page;
