import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ resource }) => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-6 mx-4 md:grid-cols-4 sm:grid-cols-3">
      {resource.data?.map((anime, index) => (
        <Link
          key={index}
          href={`/anime/${anime.mal_id}`}
          className="flex flex-col justify-between overflow-hidden transition-all rounded shadow-xl hover:text-color-accent bg-color-primary"
        >
          <Image
            src={anime.images.webp.image_url}
            alt="..."
            width={350}
            height={350}
            className="object-cover w-full max-h-72"
          />
          <h3 className="p-2 font-bold text-center md:text-xl text-md">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
