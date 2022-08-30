/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CommonMeta from "../components/common/meta/CommonMeta";

const Csr = () => {
  const router = useRouter();
  return (
    <>
      <CommonMeta
        title={"CSR"}
        siteName={""}
        description={"大丸白衣のCSRページです。"}
        url={router.pathname}
        type={""}
      />
      <main>
        <div style={{ width: "100%", textAlign: "center" }}>CSR</div>
      </main>
    </>
  );
};

export default Csr;
