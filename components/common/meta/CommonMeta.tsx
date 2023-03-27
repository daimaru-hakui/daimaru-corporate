import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  siteName?: string | null | undefined;
  title: string;
  description: string;
  url: string;
  type?: string | null;
};

const CommonMeta: NextPage<Props> = ({
  siteName,
  title,
  description,
  url,
  type,
}) => {
  const router = useRouter();
  const webTitle = router.pathname === "/" ? "" : "｜大丸白衣 ";
  return (
    <Head>
      <title>{title + webTitle}</title>
      <meta name="description" content={description} />
      <meta
        property="og:site_name"
        content={siteName ? siteName + webTitle : title + webTitle}
        key="site_name"
      />
      <meta property="og:title" content={title + webTitle} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta
        property="og:url"
        content={`https://www.daimaru-hakui.co.jp${url}`}
        key="url"
      />
      <meta property="og:type" content={type || "article"} key="type" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" key="tw_card" />
      <meta name="twitter:title" content={title + webTitle} key="tw_title" />
      <meta name="twitter:description" content={description} key="tw_desc" />
    </Head>
  );
};

export default CommonMeta;
