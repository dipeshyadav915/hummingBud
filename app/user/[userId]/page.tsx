import React from 'react';
import posts from '../../data/post.json';
import { startupCardType } from '@/types/startupCardType';
import Profile from '@/components/profile';

export default async function Page({ params }: { params: { userId: number } }) {
  const { userId } = await params;

  const filteredPosts = posts.filter(
    (post: startupCardType) => post.author._id == userId,
  );

  return (
    // <p>hey user</p>
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: startupCardType) => {
          return <Profile key={post._id} post={post} />;
        })
      ) : (
        <p>No posts found for this ID</p>
      )}
    </div>
  );
}
