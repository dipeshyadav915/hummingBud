import Main_box from '@/components/Main_box';
import Search from '@/components/search';
import { startupCardType } from '@/types/startupCardType';
import posts from '../data/post.json';
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const filterCopy = posts.filter(
    (post: startupCardType) =>
      post?.category.toUpperCase() === query?.toUpperCase(),
  );
  return (
    <>
      <div className="pink_box">
        <div className="sm-box">
          <span className="font-extrabold text-3xl font-sans">" </span>Pitch
          Vote and grow{' '}
          <span className="font-extrabold text-3xl font-sans"> "</span>
        </div>
        <div className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </div>
        <p className="box-text">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <Search query={query} />
      </div>
      <div className="w-full h-auto p-10">
        <section className="px-2">
          <p className="text-2xl font-semibold py-3">
            {query
              ? filterCopy.length > 0
                ? `Search results for "${query}"`
                : `NO search results for "${query}". Try searching something like "Health" or "Technology"`
              : 'All Startups'}
          </p>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
            {posts?.length > 0 ? (
              query ? (
                filterCopy.map((post: startupCardType) => (
                  <Main_box key={post?._id} post={post} />
                ))
              ) : (
                posts.map((post: startupCardType, index: number) => (
                  <Main_box key={post?._id} post={post} />
                ))
              )
            ) : (
              <p className="text-2xl font-semibold py-3">No startup found</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
