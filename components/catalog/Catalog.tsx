/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";
import styles from "./Catalog.module.scss";

interface Props {
  images: {
    catalogSerenadeImg1: {
      url: string;
      width: string;
      height: string;
    };
    catalogMyUniImg1: {
      url: string;
      width: string;
      height: string;
    };
  };
}

const Catalog: NextPage<Props> = ({ images }) => {
  return (
    <div className="w-full mt-20 pt-6">
      <div className="w-full text-center">
        <h2 className="mb-2 text-3xl font-bold">Original Brands</h2>
      </div>
      <div className={`${styles.catalogBody}`}>
        <ul className={styles.catalogList}>
          <li className={`${styles.catalogItem} flex flex-col items-center`}>
            <a
              href="https://my.ebook5.net/daimaru-hakui/my-uniform-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${images.catalogMyUniImg1.url}?fm=webp`}
                alt={"マイユニフォームクラブ　カタログ"}
                width={images.catalogMyUniImg1.width}
                height={images.catalogMyUniImg1.height}
              />
            </a>
            <h3 className="mt-2 font-bold text-sm">
              Food Service / Food Factory Uniform
            </h3>
          </li>
          <li className={`${styles.catalogItem} flex flex-col items-center`}>
            <a
              href="https://my.ebook5.net/daimaru-hakui/serenade-vol5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${images.catalogSerenadeImg1.url}?fm=webp`}
                alt={"セレナーデ　カタログ"}
                width={images.catalogSerenadeImg1.width}
                height={images.catalogMyUniImg1.height}
              />
            </a>
            <h3 className="mt-2 font-bold text-sm">Medical Uniform</h3>
          </li>
        </ul>
        <div className="p-3">
          <div className="font-bold text-xs">
            【デジタルカタログ使用についてのご注意】
          </div>
          <div className="text-xs">
            本デジタルカタログは、構成、文章、画像、データ等の全てにおいて、著作権法上の保護を受けています。
            <br />
            本デジタルカタログの一部あるいは全部について、いかなる方法においても複写、複製等、著作権法上で規定された権利を侵害する行為をすることは禁じられています。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
