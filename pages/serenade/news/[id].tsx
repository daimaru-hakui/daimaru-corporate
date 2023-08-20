import { useRouter } from "next/router";
import React from "react";
import ArticlePost from "../../../components/articlepost/ArticlePost";
import CommonMeta from "../../../components/common/meta/CommonMeta";
import PageTitle from "../../../components/pagetitle/PageTitle";

const SerenadeId = ({ post }: any) => {
  return (
    <>
      <CommonMeta
        title={post.title}
        siteName={""}
        description={post.content
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
          .slice(0, 180)}
        url={`/news/${post.id}`}
        type={""}
      />
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
