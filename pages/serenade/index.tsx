import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/header/Header';
import Information from '../../components/information/Information';

interface Props {
  posts: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    category: [];
    date: string;
  }[];
}

const Serenade: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Serenade 大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <div>
          <img src='./images/serenade-top-image.jpg' />
        </div>
        <Information posts={posts} directory={'/serenade/news'} />
      </main>
    </>
  );
};

export default Serenade;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': 'd6bb628f48544d69a1adb92e4c51261c636f',
    },
  };
  const res = await fetch(`https://serenade.microcms.io/api/v1/news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
