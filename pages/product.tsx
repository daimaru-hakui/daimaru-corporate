/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CommonMeta from "../components/common/meta/CommonMeta";
import Handling from "../components/handling/Handling";
import PageTitle from "../components/pagetitle/PageTitle";
import styles from "../styles/product.module.scss";

const Product = () => {
  const router = useRouter();
  return (
    <>
      <CommonMeta
        title={"商品情報"}
        siteName={""}
        description={
          "フードサービス、フードファクトリー、といった「食」にかかわるユニフォームや資材のブランドです。食の安全を大切に、早くから制菌・抗菌や制電・防汚などの機能性素材を積極的に採用した製品づくりを行っています。多くのロングセラー商品を展開する安心のブランドです。"
        }
        url={router.pathname}
        type={""}
      />

      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner p-6`}>
            <PageTitle
              titleH1="商品情報"
              titleH2="Original Brand　/　オリジナルブランド"
            />
            <div className={`flex flex-wrap mt-24`}>
              <div className={`${styles.productLeft} mb-0 mx-auto md:mb-12`}>
                <img
                  src="../images/myuni-catalog-1.jpg"
                  alt={"マイユニフォームクラブ　カタログ"}
                />
              </div>
              <div className={styles.productCenter} />
              <div className={styles.productRight}>
                <h3 className={`text-3xl font-bold mt-4 md:mt-0`}>
                  My Uniform Club
                </h3>
                <h4 className={`p-0 mt-3 mb-4 text-gray-400`}>
                  一期一会のひと時を紡ぎ出す
                  <br className="br" />
                  おもてなしの舞台へ。
                </h4>
                <p className={`text-md leading-loose`}>
                  フードサービス、フードファクトリー、といった「食」にかかわるユニフォームや資材のブランドです。
                  <br />
                  食の安全を大切に、早くから制菌・抗菌や制電・防汚などの機能性素材を積極的に採用した製品づくりを行っています。多くのロングセラー商品を展開する安心のブランドです。
                </p>
                {/* <div className={`w-full text-center md:text-left`}>
                  <button>
                    <Link href='/products'>
                      <a
                        rel='noopener noreferrer'
                        className={`block text-sm border px-12 py-3 mt-12 hover:bg-black hover:text-white ease-in duration-200`}
                      >
                        商品一覧はこちら
                      </a>
                    </Link>
                  </button>
                </div> */}
              </div>
            </div>
            <div
              className={`flex flex-wrap mt-24 mb-28`}
              style={{ flexDirection: "row-reverse" }}
            >
              <div className={`${styles.productLeft} mb-0 mx-auto md:mb-12`}>
                <img
                  src="../images/serenade-catalog-1.jpg"
                  alt="セレナーデ　カタログ"
                  className={`object-cover mx-auto w-full`}
                />
              </div>
              <div className={styles.productCenter}></div>
              <div className={styles.productRight}>
                <h3 className={`text-3xl font-bold mt-4 md:mt-0`}>Serenade</h3>
                <h4 className={`p-0 mt-3 mb-4 text-gray-400`}>
                  強く、美しい人へ。
                </h4>

                <p className={`text-md leading-loose`}>
                  メディカルウェア、ラボコートといった「医療」や「研究」にかかわるユニフォームや資材のブランドです。
                  <br />
                  機能性素材はもちろんのこと、動きやすく着心地といった日々のお仕事に寄り添う製品づくりも行っています。
                </p>
                {/* <div className={`w-full text-center md:text-left`}>
                  <button>
                    <Link href="/products">
                      <a
                        rel="noopener noreferrer"
                        className={`block text-sm border px-12 py-3 mt-12 hover:bg-black hover:text-white ease-in duration-200`}
                      >
                        商品一覧はこちら
                      </a>
                    </Link>
                  </button>
                </div> */}
              </div>
            </div>
            {/* 取り扱いユニフォーム */}
            <h2
              className={`border-b border-black text-2xl font-bold py-3 mb-6`}
            >
              取り扱いユニフォーム
            </h2>
            <Handling />
            <h2
              className={`border-b border-black text-2xl font-bold py-3 mb-6`}
            >
              オリジナルユニフォーム／オーダーメイド
            </h2>
            <div className="w-full mx-auto">
              <p className="text-xl font-bold tracking-wider leading-loose">
                その声をかたちに――
                <br />
                お客様だけのこだわりの一着
              </p>
              <p className="text-sm leading-loose mt-3">
                大丸白衣では、オーダーメイドのご用命も承っております。
                <br />
                国内自社工場に加え、国内外の協力工場での生産体制を確立しており、小ロットから大ロットまで幅広く対応可能です。
                <br />
                オリジナルデザインの制作はもちろん、お客様のご要望に合わせて最適な素材や生産方法のご提案をいたします。
                <br />
                ぜひお気軽にご相談ください。
              </p>
            </div>
            <div className="mt-6">
              <img src="/images/order-made.jpg" alt="大丸白衣 オーダーメイド" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
