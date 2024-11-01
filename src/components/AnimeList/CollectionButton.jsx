"use client";

import { useState } from "react";

export default function CollectionButton({
  title,
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (e) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();

    if (collection.isCreated) setIsCreated(true);

    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Ditambahkan Ke Collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-4 py-2 transition-all duration-300 rounded hover:bg-color-accent hover:text-color-dark bg-color-secondary text-color-primary"
        >
          {title}
        </button>
      )}
    </>
  );
}
