/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ArticleList from '../../../components/articlelist/ArticleList';
import Header from '../../../components/header/Header';
import PageTitle from '../../../components/pagetitle/PageTitle';
import styles from './SerenadeNews.module.scss';

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

const SerenadeNews: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <section className={`w-full`}>
          <div className={`inner p-6`}>
            <PageTitle titleH1='お知らせ一覧' titleH2='Serenade News' />
            <ArticleList posts={posts} directory={`/serenade/news`} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SerenadeNews;

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
