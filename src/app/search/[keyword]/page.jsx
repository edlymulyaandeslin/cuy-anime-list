import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <HeaderAnimeList title={`Pencarian untuk ${decodedKeyword}`} />
        <AnimeList resource={searchAnime} />
        {searchAnime.data.length == 0 && (
          <p className="text-xl font-semibold text-center text-color-primary">
            Tidak ada hasil
          </p>
        )}
      </section>
    </>
  );
};

export default Page;
