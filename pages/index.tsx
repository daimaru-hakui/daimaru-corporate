/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Eyecatch from "../components/eyecatch/Eyecatch";
import Information from "../components/information/Information";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Catalog from "../components/catalog/Catalog";

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
  images: {
    daimaruTopImg1: {
      url: string;
    };
    daimaruTopImg2: {
      url: string;
    };
    daimaruTopImg3: {
      url: string;
    };
    catalogSerenadeImg1: {
      url: string;
      width: string;
      height: string;
    };
    catalogMyUniImg1: {
      url: string;
      width: string;
      height: string;
    };
  };
}

const Home: NextPage<Props> = ({ posts, images }) => {
  return (
    <>
      <Head>
        <title>
          大丸白衣 | 使いやすく機能性にあふれた白衣・ユニフォームをご提案！
        </title>
        <meta
          name="description"
          content="大丸白衣は食品業界向けユニフォーム、医療業界向け白衣、作業着、制服をご提案！異物混入対策や動きやすさにも対応。ユニフォームのレンタルも行っています。"
        />
      </Head>
      <Header />
      <main>
        <Eyecatch images={images} />
        <Catalog images={images} />
        <Information posts={posts} directory={"/news"} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const accessPoint = "https://daimarucorporate.microcms.io/api/v1";
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "0d40d76b88e947a48c98d0320506b1927c9f",
    },
  };
  const res = await fetch(`${accessPoint}/news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;

  const imagesRes = await fetch(`${accessPoint}/images`, option);
  const images = await imagesRes.json();
  return {
    props: {
      posts,
      images,
    },
  };
}
