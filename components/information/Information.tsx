import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "./Information.module.scss";

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

const Information: NextPage<Props> = ({ posts, directory }) => {
  return (
    <>
      <div className={`${styles.infoWrapper} p-6`}>
        <div className={styles.infoHeading}>
          <h3>お知らせ</h3>
        </div>
        <div className={`${styles.infoBody}`}>
          <ul className={`${styles.infoList} m-0 p-0`}>
            {posts.map((post) => (
              <li className={`${styles.infoListItem} lg:ml-20`} key={post.id}>
                <span className={`block mb-2 lg:mr-8`}>
                  <time
                    dateTime={post.updatedAt}
                    className={`${styles.time} mr-8`}
                  >
                    {post.date.substring(0, 10)}
                  </time>
                  <i className={styles.cat}>{post.category}</i>
                </span>
                <div className={`${styles.title}`}>
                  <Link href={`${directory}/${post.id}`} passHref>
                    <div>{post.title}</div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.infoBtn} border lg:absolute`}>
          <Link href={directory} passHref>
            <div className="block text-center">
              <button className="py-1 mx-auto lg:w-24 text-center">
                一覧へ
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Information;
