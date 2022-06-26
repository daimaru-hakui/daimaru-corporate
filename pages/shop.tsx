/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Shop = () => {
  return (
    <>
      <Head>
        <title>大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <div style={{ width: '100%', textAlign: 'center' }}>ショップ情報</div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;