/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';
import Header from '../../components/header/Header';

const ProductId = ({ product }: any) => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 商品情報</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner p-6`}>
            <div>{product.code}</div>
            <div>
              <img src={product.image1.url} alt={product.name} />
            </div>
            <div>
              {product.productNumber} {product.productName}
            </div>
            <div dangerouslySetInnerHTML={{ __html: product.content }}></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const option = {
    headers: {
      'X-MICROCMS-API-KEY': 'd33f8465c4814bbc9f2f3567f8664e5d9dfd',
    },
  };
  const res = await fetch(
    `https://zbo8y0zyr4.microcms.io/api/v1/products`,
    option
  );
  const resJson = await res.json();
  const paths = resJson.contents.map((content: any) => ({
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
      'X-MICROCMS-API-KEY': 'd33f8465c4814bbc9f2f3567f8664e5d9dfd',
    },
  };
  const res = await fetch(
    `https://zbo8y0zyr4.microcms.io/api/v1/products/${params.id}
  `,
    option
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
