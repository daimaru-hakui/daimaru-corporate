import React from 'react';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogInner}>
        <h2 className={styles.catalogHeading}>デジタルカタログ</h2>
        <p className={styles.catalogLead}>テキストテキストテキストテキスト</p>
      </div>
      <div className={styles.catalogBody}>
        <ul className={styles.catalogList}>
          <li className={styles.catalogItem}>
            <a href='https://my.ebook5.net/daimaru-hakui/my-uniform-club/'>
              <img
                src='/images/myuni.jpg'
                alt={'マイユニフォームクラブ　カタログ'}
              />
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href='https://my.ebook5.net/daimaru-hakui/serenade/'>
              <img src='/images/serenade.jpg' alt={'セレナーデ　カタログ'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
