import React from "react";
import ArticlePost from "../../../components/articlepost/ArticlePost";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PageTitle from "../../../components/pagetitle/PageTitle";

const SerenadeId = ({ post }: any) => {
  console.log(post.title);
  return (
    <>
      <main>
        <div className={`w-full`}>
          <div className={`inner p-6`}>
            <PageTitle titleH1="お知らせ一覧" titleH2={post.title} />
            <ArticlePost post={post} />
          </div>
        </div>
      </main>
    </>
  );
};
export default SerenadeId;

export async function getStaticPaths() {
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "d6bb628f48544d69a1adb92e4c51261c636f",
    },
  };
  const res = await fetch(`https://serenade.microcms.io/api/v1/news`, option);
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
      "X-MICROCMS-API-KEY": "d6bb628f48544d69a1adb92e4c51261c636f",
    },
  };
  const res = await fetch(
    `https://serenade.microcms.io/api/v1/news/${params.id}`,
    option
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
