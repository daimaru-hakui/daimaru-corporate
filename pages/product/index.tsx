/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';
import Footer from '../../components/footer/Footer';
import Handling from '../../components/handling/Handling';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import styles from './Product.module.scss';

const Product = () => {
  return (
    <>
      <Head>
        <title>大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <section className={styles.productSection}>
          <div className={styles.productInner}>
            <PageTitle
              titleH1='商品情報'
              titleH2='Original Brand　/　オリジナルブランド'
            />
            <div className={styles.productBox}>
              <div className={styles.productLeft}>
                <img
                  src='./images/myuni.jpg'
                  alt={'マイユニフォームクラブ　カタログ'}
                />
              </div>
              <div className={styles.productCenter}></div>
              <div className={styles.productRight}>
                <h3 className={styles.productTitle}>My Uniform Club</h3>
                <h4 className={styles.productSubTitle}>
                  一期一会のひと時を紡ぎ出す
                  <br className='br' />
                  おもてなしの舞台へ。
                </h4>
                <p>
                  フードサービス、フードファクトリー、といった「食」にかかわるユニフォームや資材のブランドです。
                  <br />
                  食の安全を大切に、早くから制菌・抗菌や制電・防汚などの機能性素材を積極的に採用した製品づくりを行っています。多くのロングセラー商品を展開する安心のブランドです。
                </p>
              </div>
            </div>
            <div
              className={styles.productBox}
              style={{ flexDirection: 'row-reverse' }}
            >
              <div className={styles.productLeft}>
                <img src='./images/serenade.jpg' alt='セレナーデ　カタログ' />
              </div>
              <div className={styles.productCenter}></div>
              <div className={styles.productRight}>
                <h3 className={styles.productTitle}>Serenade</h3>
                <h4 className={styles.productSubTitle}>強く美しい人へ。</h4>

                <p>
                  メディカルウェア、ラボコートといった「医療」や「研究」にかかわるユニフォームや資材のブランドです。
                  <br />
                  機能性素材はもちろんのこと、動きやすく着心地といった日々のお仕事に寄り添う製品づくりも行っています。
                </p>
              </div>
            </div>
            {/* 取り扱いユニフォーム */}
            <h2 className={styles.productTitleH2}>取り扱いユニフォーム</h2>
            <Handling />
            <h2 className={styles.productTitleH2}>
              オリジナルユニフォーム／オーダーメイド
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
