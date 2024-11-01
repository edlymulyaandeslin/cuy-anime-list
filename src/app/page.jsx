import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendationAnime = reproduce(recommendationAnime, 4);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <HeaderAnimeList
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList resource={topAnime} />
      </section>

      {/* anime recomendation */}
      <section>
        <HeaderAnimeList title={"Anime Rekomendasi"} />
        <AnimeList resource={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
