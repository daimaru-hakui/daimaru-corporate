/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Recruit = () => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 採用情報</title>
      </Head>
      <Header />
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
      <Footer />
    </>
  );
};

export default Recruit;
