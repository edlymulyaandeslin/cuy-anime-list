"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleComment = async (e) => {
    e.preventDefault();

    if (comment.length < 3) return alert("comment minimal 3 huruf");

    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
    };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }

    return;
  };

  return (
    <form onSubmit={handleComment}>
      <textarea
        className="w-full px-4 py-2 rounded"
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value.trimStart())}
        placeholder="Commet this anime..."
      ></textarea>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="px-2 py-1 transition-all rounded w-52 bg-color-secondary hover:bg-color-accent text-color-primary"
        >
          Post Komentar
        </button>
        {isCreated && <p className="text-color-primary">Komentar terkirim</p>}
      </div>
    </form>
  );
}
