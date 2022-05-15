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
}

const Information: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <div className={styles.infoWrapper}>
        <div className={styles.infoHeading}>
          <h3>お知らせ</h3>
          <div className={styles.infoBtn}>
            <Link href={'/news'}>
              <a>一覧へ</a>
            </Link>
          </div>
        </div>
        <div className={styles.infoBody}>
          <ul className={styles.infoList}>
            {posts.map((post) => (
              <li className={styles.infoListItem} key={post.id}>
                <time dateTime={post.updatedAt} className={styles.time}>
                  {post.date.substring(0, 10)}
                  <i className={styles.cat}>{post.category}</i>
                </time>
                <p className={styles.title}>
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
