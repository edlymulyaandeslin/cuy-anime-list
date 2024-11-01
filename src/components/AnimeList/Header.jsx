import Link from "next/link";

export default function HeaderAnimeList({ title, linkHref, linkTitle }) {
  return (
    <div className="flex items-center justify-between p-4 font-semibold text-white text-color-primary">
      <h1 className="text-2xl">{title}</h1>
      {linkHref && linkTitle && (
        <Link
          href={linkHref}
          className="text-xl transition-all hover:text-color-accent"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
