/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import ProductListImage from '../../components/products/productlistImage/ProductListImage';

interface Props {
  products: {
    id: string;
    productCode: string;
    productNumber: string;
    productName: string;
    colors: {
      id: string;
      colorNumber: string;
      colorName: string;
    }[];
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
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner-big p-6`}>
            <PageTitle titleH1='商品一覧' titleH2='Product List' />
            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
            >
              {products.map((product) => (
                <ProductListImage key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': 'd33f8465c4814bbc9f2f3567f8664e5d9dfd',
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
