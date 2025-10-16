import Reset from './Reset';

export default function Search({ query }: { query?: string }) {
  return (
    <form
      action="/"
      className="search-bar lg:w-1/2 flex flex-row items-center bg-white px-1 rounded-full gap-4 border-[5px] shadow-100 border-black-200"
    >
      <input
        name="query"
        defaultValue={query}
        className="search-input w-full p-4 py-6 rounded-full outline-none"
        placeholder="search_startups"
      />
      <div className="flex gap-2">
        {query && <Reset />}

        <button type="submit" className="search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
