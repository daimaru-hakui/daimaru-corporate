import React from 'react';
import Article from '../../components/articlepost/ArticlePost';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';

const id = ({ post }: any) => {
  return (
    <>
      <Header />
      <main>
        <div className={`w-full`}>
          <div className={`inner p-6`}>
            <PageTitle titleH1='お知らせ一覧' titleH2={post.title} />
            <Article post={post} />
          </div>
        </div>
      </main>
    </>
  );
};
export default id;

export async function getStaticPaths() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': '0d40d76b88e947a48c98d0320506b1927c9f',
    },
  };
  const res = await fetch(`https://qyj277q4jw.microcms.io/api/v1/news`, option);
  const resJson = await res.json();
  const paths = resJson.contents.map((content: any) => ({
    params: {
      id: content.id,
      title: content.title,
      category: content.category,
      date: content.date,
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
      'X-MICROCMS-API-KEY': '0d40d76b88e947a48c98d0320506b1927c9f',
    },
  };
  const res = await fetch(
    `https://qyj277q4jw.microcms.io/api/v1/news/${params.id}`,
    option
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
