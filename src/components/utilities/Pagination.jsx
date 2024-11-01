function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 p-8 text-color-primary">
      {page <= 1 ? null : (
        <button
          className="px-2 py-1 transition-all rounded hover:bg-color-secondary"
          type="button"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage || 1} page
      </p>
      {page >= lastPage ? null : (
        <button
          className="px-2 py-1 transition-all rounded hover:bg-color-secondary"
          type="button"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
