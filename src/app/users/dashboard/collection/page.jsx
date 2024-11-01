import Header from "@/components/Dashboard/header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const myCollections = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="px-4 mt-2 mb-2">
      <Header title="My Collection" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {myCollections.map((collect, index) => (
          <Link
            href={`/anime/${collect.anime_mal_id}`}
            className="relative overflow-hidden rounded"
            key={index}
          >
            <Image
              src={collect.anime_image}
              alt="..."
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent">
              <h3 className="text-xl text-center">{collect.anime_title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {myCollections.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 mt-8 text-color-primary">
          <h2 className="text-2xl font-bold">No collection yet</h2>
        </div>
      )}
    </section>
  );
}
