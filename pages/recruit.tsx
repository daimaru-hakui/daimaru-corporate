/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CommonMeta from "../components/common/meta/CommonMeta";

const Recruit = () => {
  const router = useRouter();
  return (
    <>
      <CommonMeta
        title={"採用情報"}
        siteName={""}
        description={"株式会社大丸白衣の採用情報ページです。"}
        url={router.pathname}
        type={""}
      />
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner p-6`}>
            <div
              className={`flex flex-col justify-center w-full text-center text-sm md:text-2xl my-48`}
            >
              現在は新卒・中途共に募集をしておりません。
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Recruit;
