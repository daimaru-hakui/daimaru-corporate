import { NextPage } from "next";
import Head from "next/head";

type Props = {
  siteName: string | null | undefined;
  title: string;
  description: string;
  url: string;
  type: string | null;
};

const CommonMeta: NextPage<Props> = ({
  siteName,
  title,
  description,
  url,
  type,
}) => {
  const webTitle = "大丸白衣 | ";
  return (
    <Head>
      <title>{webTitle + title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:site_name"
        content={siteName ? webTitle + siteName : webTitle + title}
        key="site_name"
      />
      <meta property="og:title" content={webTitle + title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta
        property="og:url"
        content={`https://www.daimaru-hakui.co.jp${url}`}
        key="url"
      />
      <meta property="og:type" content={type || "article"} key="type" />
      <meta name="twitter:card" content="summary" key="tw_card" />
      <meta name="twitter:title" content={webTitle + title} key="tw_title" />
    </Head>
  );
};

export default CommonMeta;
