/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./ProductImage.module.scss";

const ProductImage: NextPage<any> = ({ item }) => {
  const [images, setImages] = useState<String[]>([]);

  useEffect(() => {
    let array: string[] = [];
    for (let i = 0; i <= 10; i++) {
      if (item["image" + i]) {
        array.push(item["image" + i]["url"]);
      }
    }
    setImages(array);
  }, [item]);

  const settings = {
    customPaging: function (index: number) {
      return (
        <a>
          <img src={`${images[index]}`} alt={`画像${index}`} />
        </a>
      );
    },
    dots: true,
    className: "product-slick",
    dotsClass: "product-slick-dots slick-thumb",
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`${styles.productSlider} w-full`}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <img key={index} src={`${img}?fm=webp&w=900`} alt="画像" />
        ))}
      </Slider>
    </div>
  );
};
export default ProductImage;
