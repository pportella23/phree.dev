"use client";

import Link from "./Link";

export default function PostMeta({ post, hasProfileLink }) {
  return (
    <>
      {hasProfileLink ? (
        <div className="flex flex-row items-center mt-2 mb-2">
          <Link
            className="flex flex-row items-center hover:underline"
            href={"https://github.com/" + post.author}
          >
            <img
              alt={post.author}
              src={"https://github.com/" + post.author + ".png"}
              className="relative mx-1 inline h-8 w-8 rounded-full"
            />
            <p className="text-[14px] ml-1 mr-1 font-medium">{post.author}</p>
          </Link>
          <p className="text-[14px] text-gray-700 dark:text-gray-300">
            ·{" "}
            {new Date(post.date).toLocaleDateString("en", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      ) : (
        <div className="flex flex-row items-center mt-1 mb-2">
          <img
            alt={post.author}
            src={"https://github.com/" + post.author + ".png"}
            className="relative mx-1 inline h-8 w-8 rounded-full"
          />
          <p className="text-[14px] ml-1 mr-1 font-medium">{post.author}</p>
          <p className="text-[14px] text-gray-700 dark:text-gray-300">
            ·{" "}
            {new Date(post.date).toLocaleDateString("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      )}
    </>
  );
}
