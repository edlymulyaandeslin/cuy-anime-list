import { authUserSession } from "@/libs/auth-libs";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default async function UserActionButton() {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  redirect;
  return (
    <div className="flex items-center justify-between gap-4">
      {user ? (
        <Link href="/users/dashboard" className="py-2">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={actionURL}
        className="px-4 py-2 rounded-md text-color-accent bg-color-dark"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
