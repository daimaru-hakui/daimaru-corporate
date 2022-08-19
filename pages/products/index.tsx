/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";

interface Props {
  products: {
    id: string;
    productCode: string;
    productNumber: string;
    productName: string;
    image0: {
      url: string;
    };
    image1: {
      url: string;
    };
    price: number;
    imagesColor: {
      image: {
        url: string;
      };
    }[];
  }[];
}

const Products: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 商品情報</title>
      </Head>
      <Header />
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner-big p-6`}>
            <PageTitle titleH1="商品一覧" titleH2="Product List" />
            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
            >
              {products.map((product) => (
                <div key={product.id} className="mt-6">
                  <div className="w-full">
                    {product.imagesColor && (
                      <Link href={`/products/${product.id}`}>
                        <a className="flex justify-center">
                          <img
                            src={`${product.imagesColor[0].image.url}?w=600&h=600`}
                            className="base:h-full sm:h-64 object-cover"
                          />
                        </a>
                      </Link>
                    )}
                  </div>
                  <div className="mt-2 text-xs text-center">
                    {product.productNumber} {product.productName}
                  </div>
                  {/* <div className="mt-1 text-xs">
                    価格 ￥{product.price} + 税
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "d33f8465c4814bbc9f2f3567f8664e5d9dfd",
    },
  };
  const res = await fetch(
    `https://zbo8y0zyr4.microcms.io/api/v1/products?limit=100`,
    option
  );
  const resJson = await res.json();
  const products = resJson.contents;
  return {
    props: {
      products,
    },
  };
}
