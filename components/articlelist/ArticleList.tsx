import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  posts: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    category: [];
    date: string;
  }[];
  directory: string;
}

const ArticleList: NextPage<Props> = ({ posts, directory }) => {
  return (
    <div>
      <ul className={`mt-6`}>
        {posts.map((post) => (
          <li
            key={post.id}
            className={`list-none py-3 flex flex-col lg:flex-row lg:w-full`}
          >
            <div className={`lg:w-4/12 `}>
              <span className={`mr-6 lg:mr-12`}>
                {post.date.substring(0, 10)}
              </span>
              <span className={`px-3 py-1 text-xs border`}>
                {post.category}
              </span>
            </div>
            <div className={`lg:w-8/12 `}>
              <Link href={`/${directory}/${post.id}`}>{post.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
