/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React from 'react';
import styles from './Catalog.module.scss';

interface Props {
  images: {
    catalogSerenadeImg1: {
      url: string;
    };
    catalogMyUniImg1: {
      url: string;
    };
  };
}

const Catalog: NextPage<Props> = ({ images }) => {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogInner}>
        <h2 className={styles.catalogHeading}>デジタルカタログ</h2>
        <p className={styles.catalogLead}>テキストテキストテキストテキスト</p>
      </div>
      <div className={styles.catalogBody}>
        <ul className={styles.catalogList}>
          <li className={styles.catalogItem}>
            <a
              href='https://my.ebook5.net/daimaru-hakui/my-uniform-club/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={`${images.catalogMyUniImg1.url}?fm=webp`}
                alt={'マイユニフォームクラブ　カタログ'}
                width='300px'
                height='424px'
              />
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a
              href='https://my.ebook5.net/daimaru-hakui/serenade-vol5/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={`${images.catalogSerenadeImg1.url}?fm=webp`}
                alt={'セレナーデ　カタログ'}
                width='300px'
                height='424px'
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
