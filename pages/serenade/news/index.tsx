/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ArticleList from "../../../components/articlelist/ArticleList";
import CommonMeta from "../../../components/common/meta/CommonMeta";
import PageTitle from "../../../components/pagetitle/PageTitle";

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
  const router = useRouter();

  return (
    <>
      <CommonMeta
        title={"Serenade お知らせ一覧"}
        siteName={""}
        description={
          "わたしたちは知っています。目の前の守るべき人を支えたい。力になりたい。その一心で、くる日もくる日もかけがえのない命と向き合っている。心と体にすべてでたたかっている、その姿を。そして、懸命な献身の内側にほんとうの美しさがあることを。貴方には、その美しさにふさわしいほんとうにいいものを身に着けてほしい。そんな思いを込めて、リスペクトとともにこの一着をお届けします。"
        }
        url={router.pathname}
        type={""}
      />
      <div>
        <main>
          <section className={`w-full`}>
            <div className={`inner p-6`}>
              <PageTitle titleH1="お知らせ一覧" titleH2="Serenade News" />
              <ArticleList posts={posts} directory={`/serenade/news`} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SerenadeNews;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "d6bb628f48544d69a1adb92e4c51261c636f",
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
