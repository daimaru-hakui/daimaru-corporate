/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Catalog.module.scss";

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
            <a
              href="https://my.ebook5.net/daimaru-hakui/my-uniform-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/myuni-catalog-1.jpg"
                alt={"マイユニフォームクラブ　カタログ"}
              />
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a
              href="https://my.ebook5.net/daimaru-hakui/serenade-vol5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/serenade-catalog-1.jpg"
                alt={"セレナーデ　カタログ"}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
