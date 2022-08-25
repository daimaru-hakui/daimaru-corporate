/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../../components/articlelist/ArticleList';
import PageTitle from '../../components/pagetitle/PageTitle';

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

const News: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>大丸白衣</title>
        <meta
          name='description'
          content='大丸白衣は食品業界向けユニフォーム、医療業界向け白衣、作業着、制服をご提案！異物混入対策や動きやすさにも対応。ユニフォームのレンタルも行っています。'
        />
      </Head>
      <main>
        <div className={`inner p-6`}>
          <PageTitle titleH1='お知らせ一覧' titleH2='News' />
          <ArticleList posts={posts} directory={`news`} />
        </div>
      </main>
    </div>
  );
};

export default News;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': '0d40d76b88e947a48c98d0320506b1927c9f',
    },
  };
  const res = await fetch(
    `https://daimarucorporate.microcms.io/api/v1/news`,
    option
  );
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
