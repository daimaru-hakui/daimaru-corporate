/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageTitle from "../components/pagetitle/PageTitle";

const Shop = () => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 店舗情報</title>
      </Head>
      <Header />
      <main>
        <section className={`m-full`}>
          <div className={`inner-big p-6 pb-0 mb-12`}>
            <PageTitle titleH1="店舗情報" titleH2="Shop Information" />
            <div className="flex flex-col justify-center md:flex-row tracking-wider">
              <div className="flex-1 mt-12 md:mr-6">
                <div className="text-2xl">本店</div>
                <div className="mt-6 text-xs">
                  <div>〒542-0073</div>
                  <div>大阪市中央区日本橋2丁目4番17号</div>
                  <div>TEL:06-6641-4629</div>
                  <div className="mt-6">
                    2-4-17, Nippombashi, Osaka-Shi Chuo-Ku, Osaka
                  </div>
                  <div className="mt-3">OPEN / 9:00-18:00</div>
                </div>
                <div className="mt-6">
                  <iframe
                    // className="grayscale"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5809523431903!2d135.50406531553162!3d34.66528439262119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e76a0aeefb95%3A0xc9ce2b3bca7d55a1!2z5aSn5Li455m96KGj!5e0!3m2!1sja!2sjp!4v1658814624774!5m2!1sja!2sjp"
                    width="100%"
                    height="400"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="flex-1 mt-12">
                <div className="text-2xl">神戸店</div>
                <div className="mt-6 text-xs">
                  <div>〒650-0021</div>
                  <div>神戸市中央区三宮町3丁目9番17号</div>
                  <div>Tel : 078-391-4629</div>
                  <div className="mt-6">
                    3-9-17, Sannomiyacho, Kobe-Shi Chuo-Ku, Hyogo
                  </div>
                  <div className="mt-3">OPEN / 9:00-18:00</div>
                </div>
                <div className="mt-6">
                  <iframe
                    // className="grayscale"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13122.380118089022!2d135.189401!3d34.690169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x357cf6002e8bdcdc!2z77yI5qCq77yJ5aSn5Li455m96KGjIOelnuaIuOW6lw!5e0!3m2!1sja!2sjp!4v1658814771545!5m2!1sja!2sjp"
                    width="100%"
                    height="400"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
