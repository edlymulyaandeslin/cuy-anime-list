import CollectionButton from "@/components/AnimeList/CollectionButton";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma-libs";
import Image from "next/image";

async function Page({ params }) {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);
  const data = anime.data;

  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="flex justify-between px-4 pt-4">
        <h1 className="text-2xl font-bold text-color-primary">
          {data.title} - {data.year}
        </h1>
        {!user ? null : !collection ? (
          <CollectionButton
            title={"Add to Collection"}
            user_email={user?.email}
            anime_mal_id={id}
            anime_title={data.title}
            anime_image={data.images.webp.image_url}
          />
        ) : (
          <p className="text-color-primary">Whistlisted</p>
        )}
      </div>
      <div className="flex gap-4 px-4 pt-4 text-color-primary">
        <div className="flex flex-col">
          <span>Rating: {data.score}⭐</span>
          <span>Episodes: {data.episodes} eps</span>
          <span>Duration: {data.duration}</span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-x-2">
            Genre :{" "}
            {data.genres.map((data, index) => (
              <span key={index}>{data.name} |</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-2">
            Producers :{" "}
            {data.producers.map((data, index) => (
              <span key={index}>{data.name} |</span>
            ))}
          </div>
          <div className="flex gap-x-2">Rank : {data.rank}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-4 pt-4 sm:flex-nowrap text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          className="object-cover w-full rounded"
          width={250}
          height={250}
        />
        <p className="text-sm text-justify md:text-lg">{data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer videoId={data.trailer.youtube_id} />
      </div>

      <div className="p-4">
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={data.title}
          />
        )}
      </div>
    </>
  );
}

export default Page;
