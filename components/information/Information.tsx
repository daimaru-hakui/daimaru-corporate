import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './Information.module.scss';

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
      <div className={styles.infoWrapper}>
        <div className={styles.infoHeading}>
          <h3>お知らせ</h3>
          <div className={styles.infoBtn}>
            <Link href={directory}>
              <a>一覧へ</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.infoBody} `}>
          <ul className={`${styles.infoList} m-0 p-0`}>
            {posts.map((post) => (
              <li className={`${styles.infoListItem} md:ml-20`} key={post.id}>
                <span className={`md:mr-8`}>
                  <time
                    dateTime={post.updatedAt}
                    className={`${styles.time} md:mr-8`}
                  >
                    {post.date.substring(0, 10)}
                  </time>
                  <i className={styles.cat}>{post.category}</i>
                </span>
                <p className={`${styles.title}`}>
                  <Link href={`/news/${post.id}`}>
                    <a>{post.title}</a>
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Information;
