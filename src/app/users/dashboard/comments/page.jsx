import Header from "@/components/Dashboard/header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma-libs";
import Link from "next/link";

export default async function page() {
  const user = await authUserSession();

  const myComment = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="px-4 mt-2 mb-2">
      <Header title="My Comments" />

      <div className="grid w-full grid-cols-1 gap-4 p-4">
        {myComment?.map((comment, index) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={index}
              className="p-4 rounded bg-color-primary"
            >
              <p className="text-xl font-semibold">
                Anime : {comment.anime_title}
              </p>
              <p className="text-md"> {comment.comment}</p>
            </Link>
          );
        })}
        {myComment.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 mt-8 text-color-primary">
            <h2 className="text-2xl font-bold">No comments yet</h2>
          </div>
        )}
      </div>
    </section>
  );
}
