/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import React from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';

const Company = () => {
  return (
    <>
      <Head>
        <title>大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main>
        <div style={{ width: '100%', textAlign: 'center' }}>会社概要</div>
      </main>
      <Footer />
    </>
  );
};

export default Company;
