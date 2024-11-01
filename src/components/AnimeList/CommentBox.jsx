export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id: anime_mal_id },
  });
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-2xl font-bold text-color-primary">Comments</h2>
      <div className="flex flex-col gap-3">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 border rounded-md border-color-primary"
          >
            <p className="text-color-primary">**{comment.username}**</p>
            <p className="text-color-primary">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
