import { startupCardType } from '@/types/startupCardType';
import posts from '../app/data/post.json';
import React from 'react';
import Main_box from './Main_box';

export default function Profile({ post }: { post: startupCardType }) {
  const {
    author: { _id: authorId, name, image: authorImage, bio, social = {} },
  } = post;
  const filteredPosts = posts.filter(
    (post: startupCardType) => post.author._id === authorId,
  );
  return (
    <>
      <div className="pink_box">
        <div className="heading">{name}</div>
        <div className=" w-[250px] aspect-square rounded-full overflow-hidden shadow-200 border-4 border-black mt-4 mb-2 ">
          <img
            src={authorImage}
            alt="user_image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box-text">{bio}</div>
        <div className="text-4xl flex gap-8">
          {' '}
          {social.instagram != null && (
            <i className="fa-brands fa-instagram "></i>
          )}
          {social.linkedin != null && (
            <i className="fa-brands fa-linkedin "></i>
          )}
          {social.twitter != null && (
            <i className="fa-brands fa-x-twitter "></i>
          )}
        </div>
      </div>

      <div className="mx-12 my-8">
        <p className="text-2xl font-semibold py-3 ">My Startups</p>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post: startupCardType) => {
              return <Main_box key={post._id} post={post} />;
            })
          ) : (
            <p> No startup yet!</p>
          )}
        </div>
      </div>
    </>
  );
}
