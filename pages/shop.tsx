/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageTitle from "../components/pagetitle/PageTitle";
import OpenInNewTwoToneIcon from "@mui/icons-material/OpenInNewTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  textAlign: "center",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: "0 15px 15px",
};
const Shop = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openKobe, setOpenKobe] = React.useState(false);
  const handleOpenKobe = () => setOpenKobe(true);
  const handleCloseKobe = () => setOpenKobe(false);
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
              {/* 本店 */}
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
                  <div className="mt-1">CLOSED / 土（不定休）・日・祝</div>
                  <div className="mt-1">
                    ※土曜日の休日は下記{" "}
                    <span
                      onClick={handleOpen}
                      className="underline cursor-pointer"
                    >
                      カレンダー
                    </span>
                    をご確認ください
                  </div>
                  <span
                    className="mt-6 cursor-pointer inline-block underline hover:no-underline hover:text-gray-600"
                    onClick={handleOpen}
                  >
                    <span className="mr-1 ">Calendar</span>
                    <OpenInNewTwoToneIcon fontSize="small" />
                  </span>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="text-center p-3" onClick={handleClose}>
                      <CloseIcon />
                      <span className="text-sm">閉じる</span>
                    </div>
                    <img
                      src="/images/calendar-osaka.png"
                      className="mx-auto"
                      alt="カレンダー"
                    />
                  </Box>
                </Modal>
                <div className="mt-9">
                  <iframe
                    // className="grayscale"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5809523431903!2d135.50406531553162!3d34.66528439262119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e76a0aeefb95%3A0xc9ce2b3bca7d55a1!2z5aSn5Li455m96KGj!5e0!3m2!1sja!2sjp!4v1658814624774!5m2!1sja!2sjp"
                    width="100%"
                    height="400"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              {/* 神戸店 */}
              <div className="flex-1 mt-12">
                <div className="text-2xl">神戸店</div>
                <div className="mt-6 text-xs">
                  <div>〒650-0021</div>
                  <div>神戸市中央区三宮町3丁目9番17号</div>
                  <div>Tel : 078-391-4629</div>
                  <div className="mt-6">
                    3-9-17, Sannomiyacho, Kobe-Shi Chuo-Ku, Hyogo
                  </div>
                  <div className="mt-3">
                    OPEN / 9:00-18:00（土曜日 10:00-17:00）
                  </div>
                  <div className="mt-1">CLOSED / 土（不定休）・日・祝</div>
                  <div className="mt-1">
                    ※土曜日の休日は下記
                    <span
                      onClick={handleOpenKobe}
                      className="underline cursor-pointer"
                    >
                      カレンダー
                    </span>
                    をご確認ください
                  </div>
                  <span
                    className="mt-6 cursor-pointer inline-block underline hover:no-underline hover:text-gray-600"
                    onClick={handleOpenKobe}
                  >
                    <span className="mr-1 ">Calendar</span>
                    <OpenInNewTwoToneIcon fontSize="small" />
                  </span>
                </div>
                <Modal
                  open={openKobe}
                  onClose={handleCloseKobe}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="text-center p-3" onClick={handleCloseKobe}>
                      <CloseIcon />
                      <span className="text-sm">閉じる</span>
                    </div>
                    <img
                      src="/images/calendar-kobe.png"
                      className="mx-auto"
                      alt="カレンダー"
                    />
                  </Box>
                </Modal>
                <div className="mt-9">
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
