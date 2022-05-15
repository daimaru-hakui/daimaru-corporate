/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Eyecatch from '../component/eyecatch/Eyecatch';
import Information from '../component/information/Information';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Catalog from '../component/catalog/Catalog';

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

const Home: NextPage<Props> = ({ posts }) => {
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
        <Eyecatch />
        <Catalog />
        <Information posts={posts} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_KEY,
    },
  };
  const res = await fetch(`${process.env.NEXT_API}news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
