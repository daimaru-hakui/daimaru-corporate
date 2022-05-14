import { NextPage } from 'next';
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
            <a href='#'>一覧へ</a>
          </div>
        </div>
        <div className={styles.infoBody}>
          <ul className={styles.infoList}>
            {posts.map((post) => (
              <div key={post.id}>
                <li className={styles.infoListItem}>
                  <time dateTime={post.updatedAt} className={styles.time}>
                    {post.date.substring(0, 10)}
                    <i className={styles.cat}>{post.category}</i>
                  </time>
                  <p className={styles.title}>{post.title}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Information;
