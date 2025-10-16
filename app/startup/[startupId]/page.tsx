import React from 'react';
import posts from '../../data/post.json'; // Import the JSON data
import { startupCardType } from '@/types/startupCardType';
import Post from '@/components/post';

export default async function Page({
  params,
}: {
  params: { startupId: number };
}) {
  const { startupId } = await params; // Extract startupId from params

  const filteredPosts = posts.filter(
    (post: startupCardType) => post._id == startupId,
  );

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: startupCardType) => {
          return <Post key={post._id} post={post} />;
        })
      ) : (
        <p>No posts found for this ID</p>
      )}
    </div>
  );
}
