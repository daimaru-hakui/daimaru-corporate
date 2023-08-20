import { NextPage } from "next";
import React from "react";

interface Props {
  post: {
    id: string;
    title: string;
    category: [];
    date: string;
    content: string;
  };
}

const Article: NextPage<Props> = ({ post }) => {
  return (
    <>
      <div className={`mt-3`}>
        <span className={`mr-6 lg:mr-6`}>{post.date.substring(0, 10)}</span>
        <span className={`px-3 py-1 text-xs border`}>{post.category}</span>
      </div>
      <div
        className={`my-12`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
};

export default Article;
