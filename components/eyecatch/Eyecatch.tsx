/* eslint-disable @next/next/no-img-element */
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Eyecatch.module.scss";
import { NextPage } from "next";
import { useEffect, useState } from "react";

type Props = {
  images: {
    topImage: {
      image: {
        url: string;
      };
    }[];
  };
};

const Eyecatch: NextPage<Props> = ({ images }) => {
  const [imgArray, setImageArray] = useState([]);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  useEffect(() => {
    let array: any = [];
    images.topImage.forEach((image) => {
      array.push(image.image.url);
    });
    setImageArray(array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="slider"
        style={{
          width: "100%",
          margin: "0",
          padding: "0",
          position: "relative",
        }}
      >
        <Slick {...settings}>
          {imgArray.map((img, index) => (
            <div key={index.toString()}>
              <img
                src={`${img}?fm=webp`}
                alt="トップイメージ"
                style={{ width: "100%", height: "85vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slick>
        <div className={styles.catchCopy}>
          一級品のユニフォームを手頃に手軽に届けたい。
        </div>
      </div>
    </>
  );
};
export default Eyecatch;
