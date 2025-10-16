// import React from 'react'
import { startupCardType } from '@/types/startupCardType';
import Image from 'next/image';
import Link from 'next/link';

export default function Main_box({ post }: { post: startupCardType }) {
  return (
    <>
      <div className="startup_box">
        <div className="w-full flex justify-between px-3 pt-4 lg:px-5 pb-4">
          <span className="font-semibold bg-primary-100 lg:px-4 p-2 rounded-full text-xs lg:text-base">
            {post._created_at}
          </span>
          <span className="grid grid-cols-2 gap-2">
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
        <div className="w-full flex justify-between items-center">
          <div className="grid grid-rows-2">
            <span className="capitalize lg:text-xl text-base flex items-center">
              <Link href={`/user/${post.author._id}`}>{post.author.name}</Link>
            </span>
            <span className="capitalize text-lg lg:text-3xl font-semibold ">
              <Link href={`/startup/${post._id}`}>{post.title}</Link>
            </span>
          </div>
          <Link href={`/user/${post.author._id}`}>
            <div className="size-14 overflow-hidden rounded-full flex items-center">
              <Image
                src={post.author.image}
                width={50}
                height={50}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
        <div className="py-4 text-sm lg:text-lg">
          <Link href={`/startup/${post._id}`}>
            <p> {post.description}</p>
          </Link>
        </div>
        <Link href={`/startup/${post._id}`}>
          <div className="w-full max-h-64 lg:max-h-72 rounded-2xl overflow-hidden flex items-center">
            <img
              src={post.image}
              alt="startup_img"
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
        <div className="flex my-7 justify-between items-center ">
          <Link href={`/?query=${post.category}`}>
            <span className="capitalize font-semibold text-sm lg:text-base">
              {post.category}
            </span>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <span className="bg-black text-white p-2 lg:p-4 rounded-full hover:bg-black-100 ">
              Details
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
