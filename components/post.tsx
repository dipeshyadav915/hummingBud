import { startupCardType } from '@/types/startupCardType';
import posts from '../app/data/post.json'; // Import the JSON data

import React from 'react';
import Main_box from './Main_box';

export default function Post({ post }: { post: startupCardType }) {
  if (!post) {
    return <div>No post available</div>; // Handle case where post is undefined
  }
  const query_category = post.category;
  const query_id = post._id;
  const filteredPosts = posts.filter(
    (post: startupCardType) =>
      post.category.toUpperCase() === query_category.toUpperCase() &&
      post._id != query_id,
  );

  return (
    <>
      <div className="pink_box">
        <div className="sm-box">
          <span>
            <span className="font-extrabold text-3xl font-sans">" </span>{' '}
            {post._created_at}{' '}
            <span className="font-extrabold text-3xl font-sans"> "</span>
          </span>
        </div>
        <div className="heading">
          <span> {post.title}</span>
        </div>
        <div className="mt-8  text-center">
          <span className="box-text">{post.description}</span>
        </div>
      </div>
      <div className="m-8 lg:m-24 overflow-hidden max-h-screen rounded-2xl flex items-center ">
        <img
          src={post.image}
          alt="image"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="mx-12 lg:mx-40 my-8">
        <div className="flex justify-between items-center">
          <div className=" text-xl bg-primary-100 p-2 px-3 rounded-full capitalize">
            {post.category}
          </div>
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {post.views}
          </span>
        </div>
        <div className="py-5 lg:py-8 lg:text-xl">{post.detail}</div>
        <hr className=" border-black" />
        <div className="mt-8 flex flex-col gap-7">
          <div>
            <h1 className="text-2xl font-semibold py-3">You may also like</h1>
          </div>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 &&
              filteredPosts.map((post: startupCardType) => {
                return <Main_box key={post._id} post={post} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
