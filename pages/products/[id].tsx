/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductImage from "../../components/productImage/ProductImage";
import styles from "./ProductId.module.scss";

const ProductId = ({ item }: any) => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 商品情報</title>
      </Head>
      <Header />
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner-big p-6 tracking-widest`}>
            <BreadCrumb
              category={item.category[0] || ""}
              productName={item.productName}
              productCode={item.productNumber}
            />
            <div className={`flex flex-col lg:flex-row mt-12 w-full`}>
              {/* {左カラム} */}
              <div className={`${styles.leftArea} w-full lg:mr-12 `}>
                <ProductImage item={item} />

                {item.relation[0] && (
                  <>
                    <div className="py-2 mt-8 text-base border-b">関連商品</div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                      {item.relation.map((r: any) => (
                        <div key={r.id}>
                          <Link href={`/products/${r.id}`}>
                            <a className="flex flex-col">
                              <img
                                src={`${r.image0.url}?W=300&H=300`}
                                alt={r.productNumber}
                                className="lg:w-44 lg:h-44 object-cover"
                              />
                            </a>
                          </Link>
                          <div className="text-xs mt-2">
                            <span className="mr-2">{r.productNumber}</span>
                            {r.productName}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {/* {右カラム} */}
              <div className="mt-12 lg:mt-0 w-full lg:w-6/12">
                <div className="text-2xl">{item.productNumber}</div>
                <div className="text-2xl">{item.productName}</div>
                {item.price && (
                  <div className="mt-3">
                    <span className="text-base mr-1">
                      {Math.floor(Number(item.price) * 1.1).toLocaleString() +
                        "円"}
                    </span>
                    <span className="text-sm">{`［税抜価格${item.price.toLocaleString()}円]`}</span>
                  </div>
                )}
                <div
                  className="mt-8 text-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: item.catchCopy }}
                />
                <div className="text-sm mt-8">
                  カラー：
                  {item.color.map(
                    (
                      c: { id: string; colorName: string; colorNumber: string },
                      index: number
                    ) => (
                      <span key={c.id}>
                        {c.colorName}
                        {c.colorNumber}
                        {item.color.length == index + 1 ? "" : "・"}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-1 text-sm">素　材：{item.material}</div>
                <div className="py-2 mt-8 text-base border-b">商品説明</div>
                <div
                  className="mt-6 mx-auto text-sm"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div
                  className="mt-6"
                  dangerouslySetInnerHTML={{ __html: item.size }}
                />
              </div>
            </div>
            <div className="w-full mx-auto"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const option = {
    headers: {
      "X-MICROCMS-API-KEY": "d33f8465c4814bbc9f2f3567f8664e5d9dfd",
    },
  };
  const res = await fetch(
    `https://zbo8y0zyr4.microcms.io/api/v1/products?limit=20`,
    option
  );
  const resJson = await res.json();
  const paths = resJson.contents.map((content: { id: string }) => ({
    params: {
      id: content.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "d33f8465c4814bbc9f2f3567f8664e5d9dfd",
    },
  };
  const res = await fetch(
    `https://zbo8y0zyr4.microcms.io/api/v1/products/${params.id}
  `,
    option
  );
  const item = await res.json();

  return {
    props: {
      item,
    },
  };
}
